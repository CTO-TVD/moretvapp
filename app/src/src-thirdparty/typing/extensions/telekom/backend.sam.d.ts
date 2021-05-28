declare namespace telekom.backend {

    interface SAMResponse {

        access_token: string;
        expires_in: number;
        refresh_token: string;
        scope: string;
        token_type: string;
    }
}
