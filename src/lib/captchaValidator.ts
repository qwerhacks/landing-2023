import { RECAPTCHA_SECRET } from '$env/static/private';

type ErrorCodes =
	| 'missing-input-secret'
	| 'invalid-input-secret'
	| 'missing-input-response'
	| 'invalid-input-response'
	| 'bad-request'
	| 'timeout-or-duplicate';

interface SiteVerifyResponse {
	success: true | false; // whether this request was a valid reCAPTCHA token for your site
	score: number; // the score for this request (0.0 - 1.0)
	action: string; // the action name for this request (important to verify)
	challenge_ts: string; // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
	hostname: string; // the hostname of the site where the reCAPTCHA was solved
	'error-codes': ErrorCodes[] | undefined;
}

export async function validateCaptcha(token: string): Promise<SiteVerifyResponse> {
	console.log(`Secret: ${RECAPTCHA_SECRET}`);
	const res = await fetch(
		'https://www.google.com/recaptcha/api/siteverify',
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/x-www-form-urlencoded'
			},
      body: new URLSearchParams({
				secret: RECAPTCHA_SECRET,
				response: token
			}),
		}
	);

	return await res.json();
}
