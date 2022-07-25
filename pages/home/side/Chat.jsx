import Link from 'next/link';
function Chat() {
  return (
    <div className="Chat text-center">
      <p>Start a random chat</p>

      <Link href="/chat">
        <a className="btn btn--blue" style={{ marginTop: '1rem' }}>
          Chat <span>💬</span>
        </a>
      </Link>
    </div>
  );
}
export default Chat;
