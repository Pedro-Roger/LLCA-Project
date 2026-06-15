export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  publishedAt: string;
}

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Como o microbioma do solo impacta a produtividade agrícola',
    slug: 'microbioma-solo-produtividade-agricola',
    excerpt: 'Décadas de uso intensivo de agroquímicos degradaram o ecossistema microbiológico do solo. Entenda como a restauração desse equilíbrio pode aumentar safras sem depender de insumos externos.',
    content: `## O problema invisível sob nossos pés

O solo saudável é um dos sistemas mais complexos da natureza. Por centímetro cúbico, existem bilhões de microrganismos — bactérias, fungos, protozoários — que trabalham em conjunto para disponibilizar nutrientes, fixar nitrogênio e proteger as plantas de patógenos.

Décadas de uso intensivo de agroquímicos romperam esse equilíbrio. O resultado é visível: solos compactados, erosão acelerada, e uma dependência crescente de fertilizantes artificiais para manter a produção.

## A abordagem do LLCA

A Tecnologia do Microbioma Projetado (TMP) parte de um princípio diferente: em vez de adicionar nutrientes ao solo, ela restaura a capacidade do próprio solo de produzir e ciclá-los.

Os produtos TCP são ecossistemas microbianos completos — centenas de microrganismos em equilíbrio — que ao serem aplicados se integram à microbiota nativa, amplificando suas funções naturais.

## Resultados em campo

Em testes realizados em parceria com a ESALQ/USP e Embrapa, culturas tratadas com TCP mostraram:

- **Aumento médio de 15-23%** na produtividade sem incremento de fertilizantes minerais
- **Redução de 30-40%** na necessidade de defensivos químicos
- **Melhora mensurável** na estrutura do solo após 2 ciclos de cultivo

## Conclusão

O futuro da agricultura não está em encontrar o próximo químico mais eficiente. Está em compreender e restaurar os sistemas biológicos que sustentaram a produção de alimentos por milênios.`,
    coverImageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    category: 'Ciência',
    tags: ['microbioma', 'agricultura', 'solo', 'TCP'],
    status: 'published',
    publishedAt: '2026-05-14T10:00:00Z',
  },
  {
    id: '2',
    title: 'AMR: a resistência antimicrobiana e o papel dos probióticos na pecuária',
    slug: 'resistencia-antimicrobiana-probioticos-pecuaria',
    excerpt: 'A resistência antimicrobiana é uma das maiores ameaças à saúde pública global. A pecuária industrial, que responde por 70% do uso mundial de antibióticos, está no centro do problema — e pode estar no centro da solução.',
    content: `## Uma crise silenciosa

A OMS classifica a resistência antimicrobiana como uma das dez maiores ameaças à saúde pública global. Estima-se que, sem ação, AMR causará 10 milhões de mortes por ano até 2050 — mais do que câncer.

A pecuária industrial é responsável por aproximadamente 70% do uso mundial de antibióticos, grande parte como promotores de crescimento — não para tratar doenças, mas para acelerar o ganho de peso.

## A alternativa microbiológica

Os aditivos TCP para pecuária são microbiomas desenvolvidos para substituir completamente os antibióticos na criação animal. Ao equilibrar a microbiota intestinal dos animais, eles promovem:

- Melhor conversão alimentar (os animais aproveitam mais o que comem)
- Imunidade fortalecida naturalmente
- Redução de mortalidade por doenças entéricas
- Produtos de origem animal de maior qualidade

## Validação e mercado

Os produtos TCP para pecuária são registrados no MAPA e IBD, habilitados para uso nos mercados mais exigentes do mundo — incluindo União Europeia, onde antibióticos como promotores de crescimento são proibidos desde 2006.

Para o produtor, a adoção é viável economicamente: a redução no custo de antibióticos e a melhora na conversão alimentar tornam o sistema mais rentável em 2-3 ciclos de produção.`,
    coverImageUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80',
    category: 'Ciência',
    tags: ['pecuária', 'AMR', 'antibióticos', 'saúde pública'],
    status: 'published',
    publishedAt: '2026-05-28T10:00:00Z',
  },
  {
    id: '3',
    title: 'LLCA recebe menção honrosa no New AG International 2026',
    slug: 'llca-mencao-new-ag-international-2026',
    excerpt: 'A plataforma TMP foi destacada entre as 10 inovações biotecnológicas mais relevantes para a agricultura sustentável na principal conferência de bioestimulantes e bioproteção do mundo.',
    content: `## New AG International 2026

O New AG International, realizado anualmente em Barcelona, é a principal conferência global dedicada a bioestimulantes, bioproteção e agricultura sustentável.

Na edição de 2026, a plataforma TMP do LLCA foi selecionada entre as 10 inovações biotecnológicas mais relevantes do ano, com destaque especial para a abordagem ecossistêmica — diferente do modelo convencional de cepas isoladas.

## O que chamou a atenção

Segundo os avaliadores, três aspectos da tecnologia se destacaram:

**1. Escala e shelf life**
A capacidade de manter ecossistemas microbianos complexos estáveis por até 2 anos, em condições de temperatura entre 5°C e 50°C e pH entre 2 e 14, é tecnicamente incomum e comercialmente relevante.

**2. Versatilidade de aplicação**
A mesma plataforma-mãe gera produtos para agricultura, pecuária, aquicultura e saúde humana — uma amplitude que poucos players do setor conseguem cobrir.

**3. Resultados em escala comercial**
Diferente de muitos competidores ainda em fase laboratorial, o LLCA já opera em escala nacional via Global Biotecnologia, com casos documentados em clientes como FS Bioenergia e Copercampos.

## Próximos passos

O LLCA estará presente no New AG International 2027 com um estudo de caso completo sobre o Manejo Integrado XXI.`,
    coverImageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    category: 'Institucional',
    tags: ['prêmio', 'reconhecimento', 'internacional'],
    status: 'published',
    publishedAt: '2026-06-01T10:00:00Z',
  },
  {
    id: '4',
    title: 'Eixo intestino-cérebro: o que a ciência já sabe e o que o LLCA está investigando',
    slug: 'eixo-intestino-cerebro-ciencia-llca',
    excerpt: 'A conexão entre microbiota intestinal e saúde mental é uma das fronteiras mais promissoras da medicina moderna. Entenda o estado da ciência e como a Engenharia Ecológica de Microbiomas pode abrir novos caminhos terapêuticos.',
    content: `## Uma conversa de via dupla

O nervo vago conecta o intestino ao cérebro de forma direta. Mas a influência vai além da anatomia: a microbiota intestinal produz neurotransmissores — 90% da serotonina do corpo é produzida no intestino — e moléculas que modulam o sistema imunológico e inflamatório, com efeitos diretos na função cerebral.

Isso significa que o desequilíbrio da microbiota intestinal (disbiose) não é apenas um problema digestivo. Está associado a depressão, ansiedade, autismo, Parkinson e doenças autoimunes.

## O que a ciência já documentou

Estudos publicados em Nature e Cell nos últimos 5 anos demonstraram:

- Transplante de microbiota fecal de camundongos ansiosos para camundongos sem microbiota transfere comportamentos de ansiedade
- Pacientes com depressão têm perfis de microbiota sistematicamente diferentes de controles saudáveis
- Intervenções com probióticos específicos reduziram marcadores inflamatórios associados a doenças neurodegenerativas

## A perspectiva do LLCA

A plataforma TMP foi originalmente motivada pela busca de um caminho para o Alzheimer — a doença que levou Altamiro a reinventar sua trajetória. A hipótese central: desequilíbrios na microbiota intestinal contribuem para a cascata neuroinflamatória associada ao Alzheimer.

Os Microbiomas Projetados (MP) em desenvolvimento pelo LLCA para saúde humana não são probióticos convencionais — são ecossistemas funcionais desenhados para restaurar comunidades microbianas específicas associadas ao eixo intestino-cérebro.

A validação clínica está em andamento. Os resultados iniciais em modelos animais são promissores.`,
    coverImageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    category: 'Ciência',
    tags: ['saúde humana', 'microbiota', 'neurociência', 'Alzheimer'],
    status: 'published',
    publishedAt: '2026-06-05T10:00:00Z',
  },
  {
    id: '5',
    title: 'Manejo Integrado XXI: agricultura sem químicos que custa menos',
    slug: 'manejo-integrado-xxi-agricultura-sem-quimicos',
    excerpt: 'O protocolo que reúne todas as tecnologias do LLCA em um único manejo pode ser até 30% mais barato que o convencional — e ainda aumenta a produtividade. Entenda como funciona.',
    content: `## O modelo convencional está ficando caro

Fertilizantes minerais, defensivos químicos, antibióticos para animais. O custo do manejo convencional subiu mais de 60% nos últimos 5 anos, pressionado por preços internacionais de commodities e câmbio. O produtor está espremido entre custos crescentes e margens apertadas.

## O que é o Manejo Integrado XXI

O Manejo XXI é um protocolo que substitui o tripé do custo convencional — fertilizantes acidulados, defensivos e antibióticos — pelos produtos TCP e BFF do LLCA.

A substituição não é parcial. É completa. O protocolo é desenhado para eliminar a dependência de insumos externos e restaurar a autonomia biológica do sistema produtivo.

## Por que é mais barato

O modelo econômico funciona em três etapas:

**Ano 1:** Custo similar ao convencional. O sistema biológico está sendo implantado.

**Ano 2:** Redução de 20-30% em insumos. O solo começa a ciclar nutrientes autonomamente.

**Ano 3+:** Redução de 30-40% em insumos, com ganhos de produtividade. O microbioma está estabelecido.

Distribuído por cooperativas, o protocolo tem custo de implementação acessível para produtores de médio porte.

## Status atual

O Manejo Integrado XXI está em fase de validação em escala comercial com parceiros selecionados. Os primeiros resultados de Ano 2 serão publicados no segundo semestre de 2026.`,
    coverImageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    category: 'Mercado',
    tags: ['manejo', 'agricultura', 'custo', 'produtividade'],
    status: 'published',
    publishedAt: '2026-06-08T10:00:00Z',
  },
  {
    id: '6',
    title: 'Biorremediação: como microbiomas projetados limpam rios e lagos',
    slug: 'biorremediacao-microbiomas-rios-lagos',
    excerpt: 'O Brasil tem um passivo ambiental imenso em corpos d\'água contaminados. Os blends de biorremediação do LLCA oferecem uma rota biológica, escalável e economicamente viável para tratar esse problema.',
    content: `## O passivo hídrico brasileiro

Segundo o MapBiomas, mais de 50% dos corpos d'água monitorados no Brasil apresentam algum grau de contaminação por agroquímicos, esgoto ou resíduos industriais. O custo do tratamento convencional via estações de tratamento de água é proibitivo para municípios pequenos e médios.

## A rota biológica

Os blends de biorremediação do LLCA são microbiomas projetados para degradar contaminantes orgânicos, reduzir carga de fósforo e nitrogênio, e restaurar o equilíbrio ecológico de corpos d'água comprometidos.

O mecanismo é diferente dos tratamentos químicos convencionais: em vez de neutralizar contaminantes com outros compostos, os microrganismos os metabolizam — transformando matéria orgânica em biomassa e gases inertes.

## Vantagens operacionais

- **Aplicação in situ:** não é necessário retirar a água para tratamento
- **Custo por m³ tratado** significativamente menor que métodos físico-químicos
- **Sem subprodutos tóxicos:** os subprodutos são CO₂, N₂ e biomassa
- **Escalável:** a cultura pode ser multiplicada localmente

## Modelo de negócio com municípios

Como ICT credenciada pelo MCTI, o LLCA pode contratar diretamente com governos municipais, acessando linhas de financiamento do BNDES e fundos ambientais federais. Isso abre um canal de demanda reprimida estrutural: milhares de municípios com passivos hídricos e sem capacidade de investimento em infraestrutura convencional.`,
    coverImageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    category: 'Meio Ambiente',
    tags: ['biorremediação', 'água', 'meio ambiente', 'municípios'],
    status: 'published',
    publishedAt: '2026-06-10T10:00:00Z',
  },
];

export const MOCK_CATEGORIES = ['Ciência', 'Institucional', 'Mercado', 'Meio Ambiente'];
