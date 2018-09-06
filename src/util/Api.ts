import * as Github from '@octokit/rest';

export function get(callback: (data: any) => void) {
    const token: string = process.env.HOMEBREW_GITHUB_API_TOKEN || '';

    const octokit = new Github({});
    octokit.authenticate({
        type: 'oauth',
        token: token
    });

    octokit.users.get({}).then((result: Github.AnyResponse) => {
        callback(result.data);
    });

}
