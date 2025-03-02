export default function HTMLComment({ comment }: { comment: string }) {
    return (
        <script
            type="text/comment"
            dangerouslySetInnerHTML={{ __html: comment }}
        />
    );
}
