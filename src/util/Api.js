"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Github = require("@octokit/rest");
function get(callback) {
    const token = process.env.HOMEBREW_GITHUB_API_TOKEN || '';
    const octokit = new Github({});
    octokit.authenticate({
        type: 'oauth',
        token: token
    });
    octokit.users.get({}).then((result) => {
        callback(result.data);
    });
}
exports.get = get;
//# sourceMappingURL=Api.js.map