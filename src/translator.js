
export default function translate(match) {

    const grammar = match.matcher.grammer

    const locals = new Map()

    function check(condition, message, parseTreeNode) {
        if (!condition) {
            throw new Error(message);
        }
    }
}