// import { Octokit } from "@octokit/core"
import { Octokit } from "@octokit/rest"
import * as env from "@bkl/env"
import {flat} from "/home/kdog3682/2023/utils.js"

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
    return await get(queries.listRepos, { username })
}

async function getCommitData(owner, repo) {
    function callback({ commit, sha }) {
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
    return await get(
        queries.commitIds,
        { owner, repo },
        callback,
    )
}

// listRepos("kdog3682")
// getCommitData('kdog3682', 'bkl').then(console.log)


async function createIssue(repo, o) {
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

createIssue("bkl", {
    title: "Automatic Changelog Display",
    body: "Automatically displaying changelog will help accountability",
    label: "ticket",
})
