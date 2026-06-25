import React from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatINR } from '@/utils/format';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="px-4 py-20 text-center">
        <p className="mb-4 text-sm text-muted">We couldn't find that piece.</p>
        <Link to="/collections" className="text-sm font-semibold text-gold">Back to collections</Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  const isBuyNowIntent = searchParams.get('buyNow') === '1';

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-10 sm:py-10">
      <button
        onClick={() => navigate('/collections')}
        className="mb-8 inline-flex items-center gap-3 rounded-sm border border-gold bg-ink px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide text-gold sm:w-auto"
      >
        ← Back to Catalog
      </button>

      <div className="flex flex-col gap-6 sm:flex-row sm:gap-14">
        <div className="flex-[1.2] rounded-sm border border-ivory-line bg-ivory-card p-3">
          <img src={product.image} alt={product.name} className="block max-h-[550px] w-full rounded-lg object-cover" />
        </div>

        <div className="flex flex-1 flex-col">
          <span className="text-[13px] font-semibold uppercase tracking-wide text-gold">{product.category}</span>
          <h2 className="my-2.5 font-display text-2xl font-semibold text-ink sm:text-4xl">{product.name}</h2>
          <div className="mb-7 border-y border-ivory-line py-5">
            <span className="text-3xl font-bold text-ink">{formatINR(product.price)}</span>
          </div>
          <p className="mb-8 text-[15px] leading-relaxed text-[#333]">{product.description}</p>

          <div className="mb-8 rounded-sm border border-ivory-line bg-ivory p-6">
            <h4 className="mb-4 text-sm font-bold text-ink">Material Configuration Details</h4>
            <div className="grid grid-cols-1 gap-3.5 text-[13px] text-[#555] sm:grid-cols-2">
              <div>Composition: <strong className="text-ink">{product.specs.material}</strong></div>
              <div>Net Mass: <strong className="text-ink">{product.specs.weight}</strong></div>
              <div>Purity Rating: <strong className="text-ink">{product.specs.purity}</strong></div>
              <div>Attestation: <strong className="text-ink">{product.specs.certification}</strong></div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleBuyNow}
              autoFocus={isBuyNowIntent}
              className="w-full rounded-sm border border-gold bg-ink py-4 text-sm font-bold uppercase tracking-wide text-gold"
            >
              Proceed to Secure Instant Buy
            </button>
            <button
              onClick={() => addToCart(product)}
              className="w-full rounded-sm border border-ink bg-ivory-card py-4 text-sm font-bold uppercase tracking-wide text-ink"
            >
              Add to Shopping Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
