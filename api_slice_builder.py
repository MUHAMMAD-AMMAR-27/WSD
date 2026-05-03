#!/usr/bin/env python3
import sys
import re

# ---------------- COLORS ---------------- #
def green(txt): return f"\033[92m{txt}\033[0m"
def yellow(txt): return f"\033[93m{txt}\033[0m"
def blue(txt): return f"\033[94m{txt}\033[0m"
def red(txt): return f"\033[91m{txt}\033[0m"

# ---------------- VERB TENSE DICTIONARY ---------------- #
VERB_MAP = {
    "forward": ("FORWARDING", "FORWARDED"),
    "accept": ("ACCEPTING", "ACCEPTED"),
    "reject": ("REJECTING", "REJECTED"),
    "create": ("CREATING", "CREATED"),
    "new": ("CREATING", "CREATED"),
    "add": ("ADDING", "ADDED"),
    "append": ("APPENDING", "APPENDED"),
    "save": ("SAVING", "SAVED"),
    "register": ("REGISTERING", "REGISTERED"),
    "login": ("LOGGING_IN", "LOGGED_IN"),
    "fetch": ("FETCHING", "FETCHED"),
    "get": ("FETCHING", "FETCHED"),
    "load": ("FETCHING", "FETCHED"),
    "update": ("UPDATING", "UPDATED"),
    "edit": ("UPDATING", "UPDATED"),
    "modify": ("UPDATING", "UPDATED"),
    "delete": ("DELETING", "DELETED"),
    "remove": ("DELETING", "REMOVED"),
    "switch": ("SWITCHING", "SWITCHED"),
    "sort": ("SORTING", "SORTED"),
    "arrange": ("ARRANGING", "ARRANGED"),
}

DEFAULT_PRESENT = "PROCESSING"
DEFAULT_PAST = "PROCESSED"

# ---------------- HELPERS ---------------- #
def tokens(s: str):
    return re.split(r"[ _\-]+", s.strip())

def to_pascal(s: str):
    return "".join(w.capitalize() for w in tokens(s))

def to_snake(s: str):
    return "_".join(w.lower() for w in tokens(s))

def extract_noun(raw, verb_upper):
    toks = tokens(raw)
    if toks and toks[0].lower() == verb_upper.lower():
        toks = toks[1:]
    return "_".join(toks).upper() if toks else "ENTITY"

def detect_tense(name: str):
    lname = name.lower()
    for key, pair in VERB_MAP.items():
        if lname.startswith(key):
            return pair, key.upper()
    return (DEFAULT_PRESENT, DEFAULT_PAST), "PROCESS"

# ---------------- SLICE GENERATOR ---------------- #
def build_slice(raw_name: str):
    (present, past), verb_upper = detect_tense(raw_name)
    noun_upper = extract_noun(raw_name, verb_upper)
    pascal = to_pascal(raw_name)
    snake = to_snake(raw_name)
    camel = pascal[0].lower() + pascal[1:]

    # Constant
    constant = f"{verb_upper}_{noun_upper}_API_CALL_STATE"

    print(green("✔ Verb mapping: ") + yellow(f"{present} / {past}"))
    print(blue("✔ ENTITY: ") + yellow(noun_upper))
    print(blue("✔ CONSTANT: ") + yellow(constant))
    print(blue("✔ Slice variable: ") + yellow(camel + "ApiSlice"))
    print(blue("✔ Slice name string: ") + yellow(snake))
    print()

    slice_code = f"""
import {{ createAppSlice }} from "../../../app/createAppSlice.ts";

export const {constant} = {{
  IDLE: "IDLE",
  {present}: "{present}",
  RE_{present}: "RE-{present}",
  {past}: "{past}",
  FAILED: "FAILED",
}};

const initialState = {{
  api_props: {{
    success_api_calls: 0,
    api_state: {constant}.IDLE,
  }},
}};

export const {camel}ApiSlice = createAppSlice({{
  name: "{snake}",
  initialState,
  reducers: (create) => ({{
    update{pascal}ApiCallState: create.reducer((state, action) => {{
      if (
        action.payload === {constant}.{present} &&
        state.api_props.success_api_calls >= 1
      ) {{
        state.api_props.api_state = {constant}.RE_{present};
        return;
      }}

      if (action.payload === {constant}.{past}) {{
        state.api_props.success_api_calls += 1;
      }}

      state.api_props.api_state = action.payload;
    }}),
    reset{pascal}ApiCallSlice: create.reducer((state) => {{
      Object.assign(state, initialState);
    }}),
  }}),
  selectors: {{
    select{pascal}ApiState: (state) => state.api_props.api_state,
    select{pascal}ApiSuccessCallsCount: (state) => state.api_props.success_api_calls,
  }},
}});

export const {{ update{pascal}ApiCallState, reset{pascal}ApiCallSlice }} =
  {camel}ApiSlice.actions;

export const {{ select{pascal}ApiState, select{pascal}ApiSuccessCallsCount }} =
  {camel}ApiSlice.selectors;
"""
    return slice_code, constant, camel, pascal, present, past, snake

# ---------------- USAGE BOILERPLATE ---------------- #
def build_usage(constant, camel, pascal, snake, present, past):
    return f"""
// ---------------- USAGE BOILERPLATE ---------------- //
import {{ useAppDispatch, useAppSelector }} from "../../../src/app/hooks.js";

function YourComponent() {{
  const dispatch = useAppDispatch();
  const {camel}ApiCallState = useAppSelector(select{pascal}ApiState);

  const handleSubmit = (payload) => {{
    dispatch(reset{pascal}ApiCallSlice()); // Reset API Call Slice

    new {pascal}Repository(payload)
      .addOnLoadingListener(() => {{
        dispatch(update{pascal}ApiCallState({constant}.{present}));
      }})
      .addOnSuccessListener((user) => {{
        dispatch(update{pascal}ApiCallState({constant}.{past}));
        setActiveDialog(null);
        dispatch(
          queueNotification(
            new SuccessNotification()
              .withTitle("{pascal} Successful!")
              .withMessage("{pascal} operation completed successfully.")
              .setDuration(5000)
              .build()
          )
        );
      }})
      .addOnFailureListener((failure) => {{
        dispatch(update{pascal}ApiCallState({constant}.FAILED));
        if (failure === "{snake.lower()}_already_exists") {{
          dispatch(
            queueNotification(
              new ErrorNotification()
                .withTitle("Already Exists!")
                .withMessage("{pascal} Already Exists.")
                .setDuration(5000)
                .build()
            )
          );
        }} else {{
          dispatch(queueNotification(operationFailedNotification(failure)));
        }}
      }})
      .addOnServerExceptionListener(
        tokenValidationMiddleware(dispatch, navigate, (exception) => {{
          dispatch(update{pascal}ApiCallState({constant}.FAILED));
          dispatch(queueNotification(operationFailedNotification(exception)));
        }})
      )
      .execute();
  }};
}}
"""

# ---------------- MAIN ---------------- #
if __name__ == "__main__":
    if len(sys.argv) > 1:
        name = " ".join(sys.argv[1:])
    else:
        print(blue("\nEnter your API name (Example: Register User, Fetch All Trades):"))
        name = input("> ").strip()

    if not name:
        print(red("❌ Name cannot be empty"))
        sys.exit(1)

    slice_code, constant, camel, pascal, present, past, snake = build_slice(name)
    usage_code = build_usage(constant, camel, pascal, snake, present, past)

    print(green("\n🎉 API SLICE GENERATED — COPY BELOW:\n"))
    print(slice_code)
    print(green("\n🎯 USAGE EXAMPLE — COPY BELOW:\n"))
    print(usage_code)

