import Sticker from "./Sticker";

export default function StickerList({ stickers, onStickerClick }) {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {stickers.map((sticker, index) => (
        <Sticker
          key={index}
          img={sticker.img}
          label={sticker.label}
          onClick={onStickerClick}
        />
      ))}
    </div>
  );
}
