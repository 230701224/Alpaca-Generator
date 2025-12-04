export default function Preview({ alpaca }) {
  const getImage = (folder, name) => {
    if (!name || name === "none") return null;

    // accessories are stored under /assets/accessories in this project
    if (folder === "accessories") return `/assets/accessories/${name}.png`;

    // backgrounds folder name is plural (backgrounds)
    if (folder === "backgrounds") return `/${folder}/${name}.png`;

    // default behavior for ears, eyes, hair, mouth, leg, neck
    return `/${folder}/${name}.png`;
  };

  return (
    <div className="preview-card">
      <div id="preview" className="preview-box">
        <div className="preview-frame" aria-hidden>
          {/* layers are absolute to the preview-box */}
          {(() => {
            const src = getImage("backgrounds", alpaca.background);
            return src ? <img src={src} className="layer" /> : null;
          })()}

          {(() => {
            const src = getImage("neck", alpaca.neck);
            return src ? <img src={src} className="layer" /> : null;
          })()}

          {(() => {
            const src = getImage("ears", alpaca.ears);
            return src ? <img src={src} className="layer" /> : null;
          })()}

          {(() => {
            const src = getImage("hair", alpaca.hair);
            return src ? <img src={src} className="layer" /> : null;
          })()}

          {(() => {
            const src = getImage("eyes", alpaca.eyes);
            return src ? <img src={src} className="layer" /> : null;
          })()}

          {(() => {
            const src = getImage("mouth", alpaca.mouth);
            return src ? <img src={src} className="layer" /> : null;
          })()}

          {(() => {
            const src = getImage("leg", alpaca.leg);
            return src ? <img src={src} className="layer" /> : null;
          })()}

          {(() => {
            const src = getImage("accessories", alpaca.accessories);
            return src ? <img src={src} className="layer" /> : null;
          })()}
        </div>
      </div>
    </div>
  );
}
