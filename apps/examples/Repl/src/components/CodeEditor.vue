<script setup>
    import {basicSetup, EditorView} from "codemirror"
    import {keymap} from "@codemirror/view"
    import {EditorState} from "@codemirror/state"
    import { javascript } from "@codemirror/lang-javascript"


    import {javascriptLanguage} from "@codemirror/lang-javascript"


import {autocompletion} from "@codemirror/autocomplete"

// Our list of completions (can be static, since the editor
/// will do filtering based on context).
const completions = [
  {label: "panic", type: "keyword"},
  {label: "park", type: "constant", info: "Test completion"},
  {label: "password", type: "variable"},
]

function myCompletions(context) {
  let before = context.matchBefore(/\w+/)
  // If completion wasn't explicitly started and there
  // is no word before the cursor, don't open completions.
  if (!context.explicit && !before) return null
  return {
    from: before ? before.from : context.pos,
    options: completions,
    validFor: /^\w*$/
  }
}

    const newCompletions = javascriptLanguage.data.of({autocomplete: myCompletions    })
    // console.log(keymap, basicSetup, EditorView        )
function moveToLine(view) {
  let line = prompt("Which line?")
  if (!/^\d+$/.test(line) || +line <= 0 || +line > view.state.doc.lines)
    return false
  let pos = view.state.doc.line(+line).from
  view.dispatch({selection: {anchor: pos}, userEvent: "select"})
  return true
}

function singleLineEditor() {
    return EditorState.transactionFilter.of(tr => {
      return tr.newDoc.lines > 1 ? [] : [tr]
    })
}
const parent = ref(null)
    onMounted(() => {
        const editor = new EditorView({
          doc: "ab",
          extensions: [
            keymap.of([{key: "Alt-l", run: moveToLine}]),
            basicSetup,
              singleLineEditor(),
              javascript(),
newCompletions,
    // autocompletion({override: [myCompletions]}),
          ],
          parent: parent.value
        })
        editor.focus()
        setTimeout(() => {
                    // reconfigure
        }, 10000)
    })
</script>

<template>
    <div ref="parent"></div>
</template>
