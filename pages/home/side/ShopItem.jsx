import Link from 'next/link';
import Image from 'next/image';
function ShopItem() {
  return (
    <div className="Chat text-center">
      <p>Get official mug !</p>
      <div className="ml-3">
        <Image src="/img/f1-mug.webp" alt="F1 mug" width={200} height={200} />
      </div>

      <Link href="/shop">
        <a className="btn btn--blue">
          Shop <span>🛒</span>
        </a>
      </Link>
    </div>
  );
}
export default ShopItem;
