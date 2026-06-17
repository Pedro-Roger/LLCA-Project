import embrapaImg   from '../assets/logos/embrapa.svg';
import unespImg     from '../assets/logos/unesp.svg';
import ufprImg      from '../assets/logos/ufpr.png';
import uflaImg      from '../assets/logos/ufla.gif';
import iacImg       from '../assets/logos/iac.png';
import uspImg       from '../assets/logos/usp.svg';
import estadaoImg   from '../assets/logos/estadao.svg';
import globoRuralImg from '../assets/logos/globo-rural.svg';
import fgvImg       from '../assets/logos/fgv.png';
import fsBioenergiaImg from '../assets/logos/fs-bioenergia.svg';
import inpasaImg    from '../assets/logos/inpasa.png';
import copercamposImg from '../assets/logos/copercampos.png';
import grupoBdmImg  from '../assets/logos/grupo-bdm.png';
import novaPiratiningaImg from '../assets/logos/nova-piratininga.png';

interface Institution {
  name: string;
  shortName?: string;
  logo?: string;
  color: string;
  row: 1 | 2;
}

const INSTITUTIONS: Institution[] = [
  // Row 1 — Científico & Mídia
  { name: 'ESALQ / USP', logo: uspImg,        color: '#1A2238', row: 1 },
  { name: 'UFLA',        logo: uflaImg,        color: '#2C5F2D', row: 1 },
  { name: 'UNESP',       logo: unespImg,       color: '#004B87', row: 1 },
  { name: 'UFPR',        logo: ufprImg,        color: '#2E86AB', row: 1 },
  { name: 'IAC',         logo: iacImg,         color: '#1A5276', row: 1 },
  { name: 'Embrapa',     logo: embrapaImg,     color: '#0066B3', row: 1 },
  { name: 'Fundação Chapadão', shortName: 'F. Chapadão', color: '#2C5F2D', row: 1 },
  { name: 'Life Sciences Review', shortName: 'Life Sciences', color: '#C0392B', row: 1 },
  { name: 'New AG International', shortName: 'New AG Intl', color: '#1A2238', row: 1 },
  { name: 'Estadão',     logo: estadaoImg,     color: '#003399', row: 1 },
  { name: 'Globo Rural', logo: globoRuralImg,  color: '#00703C', row: 1 },
  { name: 'Cultivar',    shortName: 'Cultivar', color: '#2C5F2D', row: 1 },
  { name: 'FGV Agroanalysis', logo: fgvImg,   color: '#1A2238', row: 1 },
  // Row 2 — Clientes
  { name: 'FS Bioenergia',         logo: fsBioenergiaImg,       color: '#2C5F2D', row: 2 },
  { name: 'Inpasa',                logo: inpasaImg,             color: '#E67E22', row: 2 },
  { name: 'Fazenda Nova Piratininga', logo: novaPiratiningaImg, shortName: 'Nova Piratininga', color: '#1A2238', row: 2 },
  { name: 'Grupo BDM',             logo: grupoBdmImg,           color: '#8E44AD', row: 2 },
  { name: 'Copercampos',           logo: copercamposImg,        color: '#C0392B', row: 2 },
  { name: 'C.Agro',                shortName: 'C.Agro',        color: '#2C5F2D', row: 2 },
];

const row1 = INSTITUTIONS.filter(i => i.row === 1);
const row2 = INSTITUTIONS.filter(i => i.row === 2);

function TextBadge({ institution }: { institution: Institution }) {
  const label = institution.shortName ?? institution.name;
  return (
    <span
      className="text-xl font-black tracking-tight opacity-30 group-hover:opacity-100 transition-opacity duration-400"
      style={{ color: institution.color }}
    >
      {label}
    </span>
  );
}

function Card({ institution }: { institution: Institution; key?: string }) {
  return (
    <div className="group flex-shrink-0 mx-8 flex items-center justify-center cursor-default">
      <div className="h-12 flex items-center justify-center">
        {institution.logo ? (
          <img
            src={institution.logo}
            alt={institution.name}
            className="max-h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
          />
        ) : (
          <TextBadge institution={institution} />
        )}
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Institution[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex w-max py-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((inst, i) => (
          <Card key={`${inst.name}-${i}`} institution={inst} />
        ))}
      </div>
    </div>
  );
}

export function ScienceMarquee() {
  return <MarqueeRow items={row1} />;
}

export function ClientsMarquee() {
  return <MarqueeRow items={row2} reverse />;
}
