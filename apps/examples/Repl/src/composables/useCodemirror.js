export {
    useCodemirror,
}
import { basicSetup, EditorView } from "codemirror"
import { keymap } from "@codemirror/view"
import { EditorState } from "@codemirror/state"

function moveToLine(view) {
    let line = prompt("Which line?")
    if (
        !/^\d+$/.test(line) || +line <= 0 ||
        +line > view.state.doc.lines
    ) {
        return false
    }
    let pos = view.state.doc.line(+line).from
    view.dispatch({
        selection: { anchor: pos },
        userEvent: "select",
    })
    return true
}

function singleLineEditor() {
    return EditorState.transactionFilter.of((tr) => {
        return tr.newDoc.lines > 1 ? [] : [tr]
    })
}

function useCodemirror(opts = {}) {
    if (opts.filetype == 'markdown') {
        
    }

    const codemirror = ref(null)
    const extensions = []

    onMounted(() => {
        new EditorView({
            doc: "ab",
            extensions,
                keymap.of([{ key: "Alt-l", run: moveToLine }]),
                basicSetup,
                singleLineEditor(),
            ],
            parent: codemirror.value,
        })
    })

    return {
        codemirror
    }
}
