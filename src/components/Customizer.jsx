import { ASSETS } from "../data/extraAssets";

export default function Customizer({ alpaca, setAlpaca }) {
  const update = (key, value) => setAlpaca({ ...alpaca, [key]: value });

  const folderFor = (key) => {
    if (key === "background") return "backgrounds";
    if (key === "accessories") return "assets/accessories"; // accessories live under public/assets/accessories
    return key;
  };

  return (
    <div className="customizer">
      {Object.keys(ASSETS).map((key) => (
        <div key={key} className="section">
          <h3>{key.toUpperCase()}</h3>

          <div className="options">
            {ASSETS[key].map((item) => {
              const folder = folderFor(key);
              const src = item === "none" ? null : `/${folder}/${item}.png`;

              return (
                <button
                  key={item}
                  aria-pressed={alpaca[key] === item}
                  className={`option-btn ${alpaca[key] === item ? "active" : ""}`}
                  onClick={() => update(key, item)}
                  title={item}
                >
                  {src ? (
                    <img src={src} alt={`${key}-${item}`} />
                  ) : (
                    <div style={{width:56,height:56,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'var(--muted)',background:'rgba(255,255,255,0.02)'}}>—</div>
                  )}
                  <span>{item}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
