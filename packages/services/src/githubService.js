export {
    getRepoFiles,
}
import { Octokit } from "@octokit/rest"
import * as env from "@bkl/env"
/* deno-fmt-ignore */ import { append, appendVariable, clip, } from "/home/kdog3682/2023/node-utils.js"
/* deno-fmt-ignore */ import {flat, maybe, splitOnceReverse, getTestData, fooga, denoDebug, denobug, isAbsolutePath, templater3, splitInHalf, pop4, map4, visit, AbstractVisitor, shellEscape, getkv, toggleBooleanState, numbered, noidea, assertObjectValue, assertValue, getClasses, exit, choose, getFileName, testEqual, pause, getBindingValueString, templater2, smartDedent5, pop3, moduleExports, joinPath, expandPath, isDecimal, hasPercentage, ass, parsePercentage, Matrix, isInteger, isEquation, isObjectObject, getExtraIndent, shellUnescape, assertEqual, asyncToggle, touched, chosen, lastOf, firstOf, isBlockEnter, group3, loremIpsum, exportString, deepToggle, maybeNewlineIndent, onAndOff, flattenModule, isModule, isNativeHtmlTag, partitionByValues, strcall, getLongest2, must, mconfig, unreachable, notify, storager, joiner, removeVeryStartingComments, ireplace, removeCommentsInPlace, editf, getLineTokens, IndexedStore, abstractError, bool, xassert, getSetLines, inMiddle, replaceLast, ensureExtension, multipleReplacer, getGradeLevel, constructEdit, getYear, Modulus, wrapClassMethods, proseReplacer, parseComments, parseFunctionDictComments, todo, dictAssertion, boundModularIncrement, construct, reduceToString2, pageTurner, assignCumulative, defaultMergeStrategy, dictSetter3, toArguments, reTemplate, parseFrontmatter, typeAssertion, defineGetter, assignAllowed, simpleRecursiveWalk, simpleArgument, exprTemplater, stringifyIfNotPrimitive, panic, stringerf, wrapFunction, regexTemplater, iso8601, strftime, walkChildEntries, getFiletype, matchf, isUrl, looksLikeFunction, toArgument2, notNull, CumulativeStorage2, simpleAssign, findAndMatch, infuseObjectArray, regexGetter, splitArg, isJavascriptComment, runTest, everyOther, splitByRange, get_regex, getImports, isJavascriptFile, isValidDateString, WriteObject, equalityf, group2, splitOnce2, dedent4, isLowerCase, looksLikeRegExpString, isRegExpString, getDependencies, camelSplit, toggle3, countf, isLiteralObject, bindMethodsAndState2, call, mget3, looks_like_object_function, create_functions_from_master, toStringArgumentPretty, codeChunks, smart_map, run_tests, hasStartingCallable, mapTemplate, aliaser, fixSelector, htmlTags, removePythonComments, simpleStringBreaker, colonConfig, operations, error, redColon, so2, group, parseSingleLineJson, Items, findDependencies, tryf, find4, localeString, cssComment, colonConfigf, trimArray, parseCallable, bringToLifeTextFix, localBringToLife, getCaller4, getErrorStack, forEach, getBindings, getExports, matchstr, filter4, allEqual, count, isNativeFunction, repeat, eat, getIndentAndText, StopWatch, stringDictSetter, getFunctionInfo, runRef, toLines, hasCallable, getProseWords, tally, paramify, codeSplit, debugConfig, logConfig, blueColon, toStringArgument3, stringCallable, simpleBinding, dashSplit4, appendBelow, appendAbove, removeLineComments, prependIfNecessary, smartDedent4, blueSandwich, walk4, findLineIndex, parseAB, applyTransform, kebabCase, getExcerpt, sortObject, buildFunction, maybeSort, parseFunction, isTypable, frontMatter, dictEntry, insertAfterIndex, State, bindMethods, cpop, tagRE, toggle2, createFunction2, assignIncrementedIndex, ufa, assignArray, regexFromComment, createParsersFromObject, imatch, globalConsoleDebug, bindMethodsAndState, isQuestion, oxfordComma, isUpperCase, getFunctionIdentifier, filter3, match, getMatch, alternatef, reCombine, assertion2, deepEqual, hasDollar, so, deepAssign, Tally, getFunctionNames, throwError, notEqual, tryString, prettyPrintCodeSnippet, prettyPrintErrorStack, iter, quotify, transformerf, assign, defineBinding, jspy, linebreak, stringCall2, reduce3, getClassParameters, assignOnTop2, isIdentifier, ndy, dashSplit3, runFunctionFromRef, equalf, alphabet, stateGetterFromSchema, mreplace, require, topLineComment, isChinese, replacef, ignoref, codeLibrary, splitLines, addArgumentQuotes, getBindings2, addCaret, mget2, getStartingConfig, incrementalEat, strlen, hr, setOnce, unescapeHtml, oxford, breakerf, runTests, map3, dateSplit, transformDict, walk3, toRegExp, tryAgainf, assertNotNull, getArgumentObject, isArgumentObject, typef, requireArg, keyAndValue, assignf, stateGetter3, objectFromArguments2, assignDefaults, transformValue, assign3, assignFresh3, evaluate3, scopedEvaluator, objectFromArguments, enforce, sub, filterObject, extractStartingJsonLikeConfig, unbrackify, newlineIndent2, deleteLine, both, normalizeIndent, getComment, secondComment, isStringRegExp, dashSplit2, clock, warning, errorStringify, alert, labelCase, bottomComment, stringCompose, getAnyIdentifier, chalkf, getNumbers, partitions, has, addUnit, toCallable, unquote, filter2, warn2, join2, caller2, assignOnce, longShort, shortLong, argPop, caller, assignOnTop, toggle, defineWindow, unescapeNewlines, escapeQuotes, unescapeQuotes, escapeNewlines, setAliases, announceCaller, removeStartingComments, smartBind, assignExisting, isObjectWithKey, eatStart, modularIncrementItem, getRegex, runFunction, isObjectLikeArray, itemGetter2, getAllKeys, prefixSlice, hasQuotes, assertion, diff, toggleState, initState, dunder, objectGetter, superTransform, popFilter, testRunner, assert2, insertAtDollar, popEmptyLine, getOptions, mergeSpecs, sortByKeys, map2, strictMessengerAssert, smartSplit, chalk4, typeLog, getFunctionName, Clock, search3, MyError, fuzzyMatch3, debugDisplay, getCaller3, messengerAssert, camelSlice, setPrototype, assignAliases, display, modifyNumber, toDict, setPush, modularIncrementIndex, longstamp, popIndex, toggleOnOff, locWrap, walk2, typeMatch, prettyStringify, getIdentifiers, CustomError, argMatch, brackify2, smartestDedent, modularIncrementNumber, AbstractMethodError, allUnique, Trie, boundarySplit, numberBoundarySplit, nodeLog, getFirst, defineProperty, supermix, partial, timeLog, timestamp, raise, getIdentifier, conditionalPrefix, conditionalSuffix, QueryList, fuzzyMatch2, buildDict, getTextAndCommand, sprawlFactory, getParameters2, pushf, intersection, union, blue, green, sandwich, getLastSpaces, smartDedent3, red, sort, debounce, checkValue, getCodeChunks, logf, boundary, myError, conditional, isStringFunction, toSpaces, objectf, searchAll, difference, singleQuote, itemGetter, slice2, mergeObjects, once, dashSplit, nchalk, coerceToObject, ArrayState, exporter2, indent2, iterator, removeAllComments, countParams, cumulativeSchemaAssign, argKwargSplit, argParse, removeInlineComments, getFrontMatter, hasHtmlSuffix, lazyArray, isThisFunction, escapeHTML, getKwargs2, search2, toStringArgument, createFuzzyMatch, edit2, splice, zip, merge2, argArgsKwargs, fill2, chalk, vueWrap, splitArray, splitArray2, warn, makeRunner2, searchf2, smartDedent2, dedent2, toArray2, stateGetter2, sortByIndex, IndexedCache, argo, curry2, doUntil2, evaluate2, findall2, findIndex2, findItem2, getCaller2, getErrorStack2, isJson, indexGetter2, insert2, pop2, parseError2, remove2, reduce2, testf2, type2, unshift2, waterfall2, xsplit2, Cache, cumulativeAssign, replaceBefore, topComment, isAsyncFunction, mapSort, getFileURI, getQuotes, isClassObject, isInitialized, getFallback, bindingRE, addObjectOrObjectProperty, forDoubles, isCss, log, iterate, backAndForth, round, iteratorWrapper, toJSON, isFromMap, toString, empty, conditionalString, getConfigArg, hasKey, errorWrap, successWrap, check, toPoints, bind, mixinAliases, isPercentage, isBasicType, reducerStrategy, gather, entries, stateGetter, methodCase, vueCase, push2, smarterIndent, lineSplit, Store, isSingleLetter, prepareText, isSymbol, getShortest, slice, KeyError, deepCopy, argsKwargs, isError, isColor, list, objectEditor, matchall, makeFastRunner, announce, hasLetter, filter, reduce, stringCall, capitalizeName, stop, proseCase, lineDitto, mixinSetters, modularIncrement, distinct, definedSort, groupBy, reWrap2, fuzzyMatch, isPlural, Element, parseError, isPrimitiveArray, callableArgsKwargs, waterfall, defineVariable, info, flat2D, splitThePage, handleError, dedent, TypeAssertion, createFunction, pluralize, remove, Group, PageStorage, Storage, UniqueStorage, Watcher, arrayToDict, addProperty, addQuotes, argWrapFactory, assert, abrev, abf, addExtension, assignFresh, antif, atFirst, atSecond, backspace, bindObject, breaker, blockQuote, brackify, bringToLife, comment, countCaptureGroups, capitalizeTitle, classMixin, callableRE, camelToTitle, curry, createVariable, changeExtension, curryStart, curryEnd, capitalize, copy, camelCase, compose, char2n, camelToDash, deepMerge, datestamp, doublef, dictSetter, dictSetter2, dsearch, doUntil, dashCase, doubleQuote, dict, dictGetter, depluralize, dreplace, dictf, endsWithWord, exporter, edit, exists, evaluate, extend, find, flatMap, fill, fixUrl, functionGetter, findall, fixPath, fparse, findIndex, firstLine, ftest, getKwargs, getFirstName, getBindingName, getParameters, getLastWord, getCodeWords, getCodeWords2, getIndent, getExtension, getLast, getLongest, getChunks, getCaller, getStackTrace, getConstructorName, getFirstWord, getWords, getSpaces, hasComma, hasSpaces, hasHtml, hasBracket, hasNewline, hasCaptureGroup, hasEquals, hasValue, hasCamelCase, hasNumber, hackReplace, insert, indexGetter, incrementf, isCallable, isQuote, isEven, isOdd, isLast, isHTML, isNode, interweave, inferLang, isString, isArray, isObject, isDefined, isFunction, isPrimitive, isNumber, isSet, isNestedArray, indent, isNull, isWord, isBoolean, isRegExp, identity, isObjectLiteral, isJsonParsable, isCapitalized, isNewLine, isObjectArray, isStringArray, isClassFunction, joinSpaces, join, keyArrayToObject, lowerCase, linebreakRE, len, lineGetter, lineCount, lastLine, logConsole, makeRunner, mixin, modularf, matchGetter, merge, mget, map, mergeOnTop, mergeToObject, mapFilter, noop, nestPush, no, newlineIndent, n2char, objectWalk, overlap, objectToString, opposite, pipe, parseTopAttrs, pascalCase, partition, parens, push, pop, parseJSON, rigidSort, removeQuotes, rep, removeComments, range, removeExtension, rescape, reverse, reWrap, reduceToString, repeatUntil, swapKey, sayhi, swap, splitMapJoin, splitCamel, smallify, search, stringify, shared, smartDedent, stringBreaker, sleep, split, snakeCase, stringArgument, sorted, splitOnce, searchf, secondLine, titleCase, textOrJson, toNumber, toArgument, toNestedArray, test, type, tail, transformObject, trim, testf, toArray, templater, totalOverlap, upperCase, unique, uncapitalize, unzip, wrap, walk, wrapf, xsplit, yes, zip2} from "/home/kdog3682/2023/utils.js"

const octokit = new Octokit({ auth: env.GITHUB_ACCESS_TOKEN })

async function get(query, ref, callback) {
    try {
        const response = await octokit.request(query, ref)
        const data = response.data
        return callback ? data.map(callback) : data
    } catch (error) {
        console.error("Error:", error)
    }
}
const queries = {
    listRepos: "GET /users/{username}/repos",
    commitIds: "GET /repos/{owner}/{repo}/commits",
}
async function listRepos(username) {
    return await get(queries.listRepos, { username }).map(
        extractRepositoryDetails,
    )
}

async function getCommitData(owner, repo) {
    return await get(
        queries.commitIds,
        { owner, repo },
        callback,
    )
}

// getCommitData('kdog3682', 'bkl').then(console.log)

async function createRepoIssue(repo, o) {
    const owner = env.GITHUB_REPO_OWNER
    const issueData = await octokit.issues.create({
        owner,
        repo,
        title: o.title,
        body: o.body,
        labels: flat(o.label, o.labels),
        assignees: flat(o.assignees),
    })
    console.log(issueData)
    return issueData.data.htmlUrl
}
async function closeRepoIssue(path, issueNumber, body) {
    const [owner, repo] = path.split("/")
    const response = await octokit.rest.issues.update({
        owner,
        repo,
        issue_number: issueNumber,
        state: "closed",
        body: body || "",
    })
}
function abc(s) {
    createRepoIssue("bkl", {
        title: "Automatic Changelog Display",
        body:
            "Automatically displaying changelog will help accountability",
        label: "ticket",
    })
}

async function getRepoCommits(path) {
    const [owner, repo] = path.split("/")
    const commits = []
    let page = 1

    while (true) {
        const response = await octokit.repos.listCommits({
            owner,
            repo,
            per_page: 100,
            page,
        })

        if (response.data.length === 0) {
            break
        }

        commits.push(...response.data.map(extractCommitDetails))
        page++
    }

    return commits
}

function extractCommitDetails({ commit, sha }) {
    return {
        sha: {
            long: sha,
            short: sha.slice(0, 7),
        },
        author: commit.author.name,
        date: commit.author.date,
        message: commit.message,
    }
}
// const data = await getRepoCommits("kdog3682/bkl")
// clip(data)
//

const listUserRepos = async (username) => {
    const repos = []
    let response
    let page = 1

    do {
        response = await octokit.repos.listForUser({
            username,
            per_page: 100,
            page,
        })

        console.log(response.data[0])
        return
        repos.push(...response.data)
        page++
    } while (response.data.length > 0)

    return repos
}

// await listUserRepos('kdog3682')
function extractRepositoryDetails(data) {
    const {
        created_at,
        pushed_at,
        updated_at,
        html_url,
        name,
        id: id,
        owner: { login: owner },
        visibility,
        default_branch,
    } = data

    return {
        created_at,
        pushed_at,
        updated_at,
        html_url,
        name,
        id,
        owner,
        visibility,
        default_branch,
    }
}

function extractIssueDetails(issue) {
    // Destructure the necessary keys from the issue object
    const {
        number,
        title,
        state,
        body,
        html_url,
        created_at,
        updated_at,
        user: { login: creator },
        labels,
    } = issue

    // Construct an object to return these details
    return {
        number,
        title,
        state,
        body,
        issue_url: html_url,
        created_at,
        updated_at,
        creator,
        labels: labels.map((label) => label.name), // Assuming labels is an array of objects with a 'name' key
    }
}

const getRepoIssues = async (path) => {
    const store = []
    const [owner, repo] = path.split("/")
    let page = 1

    while (true) {
        const response = await octokit.issues.listForRepo({
            owner,
            repo,
            per_page: 100,
            page,
        })
        const items = response.data.map(extractIssueDetails)
        if (items.length) {
            store.push(...items)
            if (items.length <= 100) {
                return store
            }
        } else {
            return store
        }
        page++
    }
}

// console.log(await getRepoIssues("kdog3682/bkl"))

// const response = await octokit.rest.issues.update({
// owner,
// repo,
// issue_number: issueNumber,
// state: "closed",
// })

function checkpointf(opts) {
    function create(x) {
        const items = flat(x)
        if (items.every((item) => isString(item) && /^[\w-_.]+$/.test(item))) {
            return function lambda(s) {
                return items.includes(s)
            }
        } else if (items.every(isRegExp)) {
            return function lambda(s) {
                return items.some((item) => item.test(s))
            }
        } else {
            const r = RegExp(items.join('|'))
            // console.log(r)
            return testf(r)
        }
    }
    const include = opts.include ? create(opts.include) : null
    const exclude = opts.exclude ? create(opts.exclude) : null

    // const saver = bouncer({after: att, delay: 2000})

    return function checkpoint(path) {
        const name = tail(path)

        if (include) {
            if (include(name)) {
                console.log('including name via include', name)
                return true
            } else {
                console.log('excluding name via not include', name)
                return false
            }
        }
        if (exclude) {
            if (exclude(name)) {
                console.log('excluding name', name)
                return false
            } else {
                console.log('including name via not exclude', name)
                // saver(name)
                return true
            }
        }
        return true
    }
}
class PathCheckpoint {
    constructor(options) {
        const fileOptions = options?.file || {}
        const dirOptions = options?.dir || {}
        const excludeFiles = [

  "push.yml",
  "LICENSE",
  "README.md",
  "stylua.toml",
            "README.md",
            "README",
            "Readme.md",
            "readme.md",
            "CHANGELOG.md",
            "CHANGELOG",
            "Changelog.md",
            "changelog.md",
            "LICENSE",
            "LICENSE.md",
            "License.md",
            "license.md",
            "CONTRIBUTING.md",
            "CONTRIBUTING",
            "Contributing.md",
            "contributing.md",
            "TODO.md",
            "TODO",
            "Todo.md",
            "todo.md",
            ".gitignore",
            ".env",
            ".dockerignore", // Configuration files that should be skipped
            "package-lock.json",
            "yarn.lock", // Dependency lock files
            "composer.lock", // PHP composer lock file
  ".git-blame-ignore-revs",
  ".node-version",
  ".prettierignore",
  ".prettierrc",
  "BACKERS.md",
  "FUNDING.json",
  "SECURITY.md",
  "eslint.config.js",
  "netlify.toml",
  "package.json",
  "pnpm-lock.yaml",
  "pnpm-workspace.yaml",
  "rollup.config.js",
  "rollup.dts.config.js",
  "tsconfig.build-browser.json",
  "tsconfig.build-node.json",
  "tsconfig.json",
  "vitest.config.ts",
  "vitest.e2e.config.ts",
  "vitest.unit.config.ts"
        ]
        const excludeDirs = [
            "node_modules", // Node.js modules directory
            "vendor", // PHP composer vendor directory
            ".git", // Git directory
            "dist",
            "build", // Common build output directories
            ".idea",
            ".vscode", // IDE specific directories
            "assets",
            "docs", // Asset and documentation directories
            "test",
            "tests",
            "__tests__", // Test directories
            "spec",
            "specs", // Specification directories
            "log",
            "logs", // Log directories
            "tmp",
            "temp", // Temporary and temp directories
            ".github",
            ".gitlab", // CI/CD configuration directories
        ]

        deepAssign(dirOptions, "exclude", excludeDirs)
        deepAssign(fileOptions, "exclude", excludeFiles)
        this.checkFile = checkpointf(fileOptions)
        this.checkDir = checkpointf(dirOptions)
    }
}

function parseGithubUrl(url) {
    // https://github.com/yorickpeterse/nvim-grey
    let m
    if (
        m = match(
            url,
            /github.com\/(\S+?)\/(\S+?)(?:\/?$|\/\w+)/,
        )
    ) {
        return m
    }
    if (m = match(url, /^(\S+?)\/(\S+?)(?:\/?$|\/\w+)/)) {
        return m
    }
}

// url: owner/repo
// root: '' means root
// limit: will be a number
// parser: optional
// returns: object {type | content or contents | path }
// status: working
async function getRepoFiles(url, opts = {}) {
    let count = 0

    const checkpoint = new PathCheckpoint(opts)
    const [owner, repo] = parseGithubUrl(url)
    const path = opts.root || ""
    const limit = opts.limit ? opts.limit : 10

    const runner = async (path) => {
        count += 1
        if (count > limit) {
            return
        }
        const { data } = await octokit.rest.repos.getContent({
            owner,
            repo,
            path,
        })
        if (data?.type == "file") {
            if (!checkpoint.checkFile(data.path)) {
                return
            }
            return opts.parser(data)
        } else if (
            isArray(data) && (count == 1 || opts.recursive)
        ) {
            if (count != 1 && !checkpoint.checkDir(path)) {
                return
            }
            const store = []
            for (const arg of data) {
                if (count > limit) {
                    break
                }
                const contents = await runner(arg.path)
                if (!contents) {
                    continue
                }
                push2(store, contents)
            }
            return {
                path: path,
                type: "directory",
                contents: store,
            }
        }
    }
    const tree = await runner(path)
    if (opts.flat) {
        return flatten(tree, ogetf("contents"), identity)
    }
    return tree
}
function ogetf(key) {
    return function lambda(o) {
        return o[key]
    }
}
function flatten(tree, getChildren, getChild) {
    const store = []
    const runner = (state) => {
        const children = getChildren(state)
        if (children) {
            map(children, runner)
        } else {
            push2(store, getChild(state))
        }
    }
    runner(tree)
    return store
}
function namer(x) {
    return x.name
}



function bouncer(o = {}) {
    const runner = (store) => {
        o.after(store)
    }
    const save = debounce(runner, o.delay || 50)
    const store = []
    return function lambda(arg) {
        push2(store, arg)
        save(store)
    }
}

// const c = new PathCheckpoint({file: {include: 'vi', exclude: 'aa'}})
// getRepoFiles("vuejs/core").then(console.log) working
// getRepoFiles("vuejs/core",  {root: '.github', limit: 100, parser: (x) => x.name}).then(clip)
// const grey = 'https://github.com/yorickpeterse/nvim-grey'
const dir = 'vuejs/core'
// const dir = grey


function att(payload) {
    const tempfile = "/home/kdog3682/2024/temp.txt"
    append(tempfile, payload)
}
//
//

// listRepos("kdog3682").then(console.log)

async function getDefaultBranch(owner, repo) {
  try {
    const response = await octokit.repos.get({
      owner,
      repo,
    });

    return response.data.default_branch;
  } catch (error) {
    console.error(error);
  }
}


async function getSha(url) {
    const [owner, repo] = parseGithubUrl(url)
    retrun await octokit.rest.git.getRef({
      owner,
      repo,
      ref: `heads/${getDefaultBranch(owner, repo)}`,
    });
}

// in progress
function function getTree(url) {
    const [owner, repo] = parseGithubUrl(url)
    const tree = await octokit.rest.git.getTree({
      owner,
      repo,
      tree_sha: getSha(url),
    })
}
