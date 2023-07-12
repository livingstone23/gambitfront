import { Amplify } from "aws-amplify";

export function initAmplify() {
    Amplify.configure({
        aws_cognito_region:"us-east-1",
        aws_user_pools_id:"us-east-1_QIfnyB28K",
        aws_user_pools_web_client_id:"4osbsf3ohml89dh9h74aaboidl",
        aws_cognito_identity_pool_id:"us-east-1:6bcc8b7a-a371-4ba2-a490-39d2ead2097b"
    })
}