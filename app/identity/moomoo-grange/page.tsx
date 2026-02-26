import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "무무목장 프로젝트 — Samsuryeong MooMoo Ranch" }

export default function MooMooGrangePage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "정체성", path: "/identity" },
        { label: "무무목장 프로젝트" },
      ]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-3">무무목장 프로젝트</h1>
          <p className="text-lg text-abbey-500 mb-2">Samsuryeong MooMoo Ranch</p>
          <p className="text-sm text-abbey-400 italic mb-10">Opus Dei Agriculturae &mdash; The Work of God in Agriculture</p>

          {/* Executive Summary */}
          <div className="bg-forest-50 rounded-lg p-8 border border-forest-200 mb-10">
            <h2 className="text-xl font-serif font-bold text-forest-800 mb-4">Executive Summary</h2>
            <p className="text-forest-700 leading-relaxed mb-4">
              Samsuryeong MooMoo Ranch is not a dairy farm. It is a living prototype for rural restoration on the
              Korean Peninsula &mdash; a Catalytic Mission Infrastructure designed to demonstrate that regenerative
              agriculture, community healing, and creation stewardship can be woven into a single, self-sustaining
              platform that one day may be replicated across the most isolated highland regions of North Korea.
            </p>
            <p className="text-forest-700 leading-relaxed">
              Located at 1,000 meters elevation in Taebaek, Gangwon Province, the ranch inherits a 50-year legacy
              from Jesus Abbey and operates as a premium A2 micro-dairy specializing in Jersey cattle &mdash; a breed
              uniquely suited to highland conditions &mdash; while integrating the complete rural value chain:
              Production, Processing, Food &amp; Beverage, Agritourism, Training, and Direct Sales.
            </p>
          </div>

          <div className="space-y-10">

            {/* 50-Year Legacy */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">50년 예수원의 유산</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                The story of Samsuryeong MooMoo Ranch begins not in a business plan, but in a prayer. Its
                establishment was led by The Rev. Archer Torrey III (대천덕), founder of Jesus Abbey,
                who envisioned a self-sustaining highland community where prayer and labor would be inseparably joined.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-4">
                In the mid-1970s, on the windswept plateau of the Taebaek range at approximately 1,000 meters
                elevation, Fr. Torrey initiated the formation of a dairy-based monastic community grounded in the
                Benedictine rhythm of <em>ora et labora</em>. The purpose was never commercial. It was covenantal: to embody a
                life where worship in the chapel flowed seamlessly into stewardship of pasture, barn, and herd.
              </p>
              <p className="text-abbey-700 leading-relaxed">
                During the crucial formative years from 1975 to 1982, Paul A. Kingsbury &mdash; after completing more than
                two decades of pioneering livestock development work through Heifer International in Korea &mdash;
                devoted his final six years in Korea to assisting Fr. Torrey in establishing the ranch. Samsuryeong MooMoo Ranch
                carries not only the Benedictine legacy of Jesus Abbey, but also the living imprint of one of the hidden
                fathers of Korean dairy development.
              </p>
            </div>

            <div className="border-t border-abbey-200" />

            {/* Leadership */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Tri-National Leadership Team</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                Today, the ranch is led by a uniquely aligned tri-national leadership team representing South Korea,
                North Korea, and the United States &mdash; embodying the three nations most historically intertwined
                on the Korean Peninsula.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">Hezekiah (Seo Su-cheol)</h3>
                  <p className="text-xs text-forest-600 mb-3">South Korea</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    Ranch director within the Jesus Abbey community. He carries the operational legacy of the original
                    missionary founders, stewarding the 1,000-meter highland pastures and Jersey herd through every season.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">Joseph Park</h3>
                  <p className="text-xs text-forest-600 mb-3">North Korea (Musan County, North Hamgyong Province)</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    Born in DPRK. Studied veterinary medicine in South Korea and founded social enterprises for North Korean
                    defectors. Joined the Jesus Abbey ranch in 2023 to build a livestock-based restoration model for North Korea.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-1">Dr. Barney Smith</h3>
                  <p className="text-xs text-forest-600 mb-3">United States</p>
                  <p className="text-sm text-abbey-700 leading-relaxed">
                    American veterinarian who served inside North Korea as a missionary and agricultural practitioner from
                    1997 to 2019. His rare combination of long-term in-country experience and veterinary expertise provides
                    field readiness that cannot be replicated.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* Polyface + Swiss Model */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Polyface + Swiss Model</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                The project draws its strategic architecture from two of the most proven small-scale agricultural
                paradigms in the world: Joel Salatin&apos;s Polyface Farm (regenerative, decentralized agriculture) and
                the Swiss Highland Dairy Model (artisanal, village-based, tourism-integrated).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-3">Polyface Principles</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      ["Regenerative Agriculture", "Building soil health through managed grazing"],
                      ["Multi-Species Rotation", "Cattle, poultry, pigs in symbiotic sequence"],
                      ["Soil-First Philosophy", "Soil biology as the foundation of all production"],
                      ["Direct-to-Consumer", "Eliminating middlemen through farm-gate sales"],
                      ["Decentralized Resilience", "Independence from industrial supply chains"],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3 items-start">
                        <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-serif font-bold mb-3">Swiss Highland Dairy Principles</h3>
                  <ul className="space-y-2 text-sm text-abbey-700">
                    {[
                      ["Highland Optimization", "Dairy production adapted to altitude and climate"],
                      ["Small-Scale, High-Value", "Quality over volume; premium A2 milk"],
                      ["Value-Added Processing", "Cheese, yogurt, butter production on-site"],
                      ["Rural Tourism Integration", "Farm visits as economic engine"],
                      ["Ecological Stewardship", "Sustainable mountain pasture management"],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3 items-start">
                        <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                        <span><strong>{title}:</strong> {desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* Taebaek as DPRK Prototype */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Taebaek as a DPRK Highland Prototype</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                Taebaek is strategically the closest functional analog to DPRK highland conditions available anywhere in South Korea.
                Every system proven at Samsuryeong is directly transferable to DPRK highland conditions with minimal adaptation.
              </p>
              <div className="bg-white rounded-lg border border-abbey-200 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-abbey-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">Parameter</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">Taebaek (Samsuryeong)</th>
                      <th className="px-4 py-3 text-left font-medium text-abbey-600">DPRK Highlands</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-abbey-200">
                    {[
                      ["Elevation", "1,000m above sea level", "800\u20131,200m typical"],
                      ["Winter Duration", "5\u20136 months sub-zero", "5\u20137 months sub-zero"],
                      ["Mean January Temp", "-8\u00B0C to -12\u00B0C", "-10\u00B0C to -20\u00B0C"],
                      ["Arable Land", "Severely limited", "Severely limited"],
                      ["Feed Supply", "Local production + limited import", "Almost entirely local"],
                      ["Supply Chain", "Remote, limited logistics", "Extremely constrained"],
                    ].map(([param, taebaek, dprk]) => (
                      <tr key={param}>
                        <td className="px-4 py-2 font-medium text-abbey-700">{param}</td>
                        <td className="px-4 py-2 text-abbey-600">{taebaek}</td>
                        <td className="px-4 py-2 text-abbey-600">{dprk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* Six-Stage Value Chain */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Integrated Six-Stage Value Chain</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                The ranch is not a single-product dairy operation. It is an Integrated Rural Restoration Blueprint &mdash;
                a complete, closed-loop economic ecosystem designed to demonstrate that a single highland community can
                achieve nutritional self-sufficiency, economic viability, educational capacity, and cultural renewal simultaneously.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { stage: "1", title: "Production", desc: "Jersey A2 dairy, pasture management" },
                  { stage: "2", title: "Processing", desc: "Yogurt, cheese, butter, gelato on-site" },
                  { stage: "3", title: "F&B", desc: "Ranch cafe, restaurant, tasting room" },
                  { stage: "4", title: "Agritourism", desc: "Farm tours, healing programs, retreats" },
                  { stage: "5", title: "Training", desc: "PBL education, farming apprenticeships" },
                  { stage: "6", title: "Direct Sales", desc: "Subscription, live commerce, B2B" },
                ].map(({ stage, title, desc }) => (
                  <div key={stage} className="bg-white rounded-lg p-5 border border-abbey-200">
                    <span className="text-xs font-bold text-forest-600">Stage {stage}</span>
                    <h3 className="font-serif font-bold mt-1 mb-2">{title}</h3>
                    <p className="text-sm text-abbey-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* Jersey Genetics */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Jersey Genetics &amp; Highland Suitability</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                The choice of Jersey cattle is strategic. Among the world&apos;s dairy breeds, the Jersey is
                the most highland-adapted, feed-efficient, and value-dense breed available &mdash; making it the optimal
                genetics platform for both the Samsuryeong operation and future DPRK deployment.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {[
                    ["Body Size", "400\u2013450 kg (vs 600\u2013700 kg Holstein)"],
                    ["Feed Efficiency", "Highest milk solids per kg feed"],
                    ["Milk Fat", "4.8\u20135.2% (vs 3.5\u20133.7% Holstein)"],
                    ["A2 \u03B2-Casein", "~100% A2/A2 genotype"],
                    ["Cold Tolerance", "Excellent"],
                    ["Calving Ease", "Very high, reduced veterinary dependency"],
                    ["Temperament", "Docile, suitable for small-holder management"],
                    ["Longevity", "12\u201315+ years productive life"],
                  ].map(([trait, value]) => (
                    <div key={trait} className="flex gap-3">
                      <span className="font-bold text-forest-700 shrink-0 min-w-[120px]">{trait}</span>
                      <span className="text-forest-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* Creation Stewardship Theology */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Creation Stewardship Theology</h2>
              <blockquote className="border-l-4 border-forest-300 pl-6 mb-6 italic text-abbey-600">
                <p className="mb-2">&ldquo;Et vidit Deus quod esset bonum.&rdquo;</p>
                <p>&ldquo;And God saw that it was good.&rdquo; &mdash; Genesis 1:25</p>
              </blockquote>
              <p className="text-abbey-700 leading-relaxed mb-4">
                The entire operational philosophy is built on a theology of creation stewardship that interprets
                regenerative agriculture as an act of discipleship. The Hebrew term <em>shamar</em> in Genesis 2:15 &mdash;
                typically translated &ldquo;to keep&rdquo; &mdash; carries the meaning of guarding, protecting, and actively preserving.
                The human vocation is to serve the garden, not to extract from it.
              </p>
              <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200">
                <p className="text-sm text-abbey-700 leading-relaxed italic">
                  소를 소답게 키운다 &mdash; &ldquo;We raise cattle as cattle were meant to be raised.&rdquo;
                  This is not a slogan. It is a theological commitment. Raising cattle on open pasture, allowing natural behaviors,
                  respecting seasonal rhythms, and honoring the animal&apos;s created nature is an expression of the <em>imago Dei</em>.
                </p>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* NK Multiplication Readiness */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">North Korea Multiplication Readiness</h2>
              <p className="text-abbey-700 leading-relaxed mb-4">
                The ranch&apos;s breeding program is designed around the &ldquo;Passing on the Gift&rdquo; principle originated by
                Heifer International: each family that receives a heifer commits to pass the first female calf to another
                family. Five Jersey heifers placed in a highland village become ten within two years, twenty within four.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-6">
                When political conditions change, the international community will face an urgent question: What rural development
                model can be deployed rapidly in DPRK highland communities? It must be small-scale, self-replicating,
                highland-adapted, community-centered, and immediately productive.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
                <p className="text-forest-800 font-bold mb-3">Why this model fits DPRK conditions:</p>
                <ul className="space-y-2 text-sm text-forest-700">
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>Contains no politically sensitive technology or ideology</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>Requires no imported technology, no internet connectivity, and no foreign management</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>All inputs are locally sourced: pasture-based feed, natural breeding, gravity-fed water</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>Processing technology uses methods that predate industrialization</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="shrink-0 mt-0.5">&#x2022;</span>
                    <span>Knowledge transfer occurs through apprenticeship and hands-on training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-abbey-200" />

            {/* Conclusion */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">A Lifestyle Seed for Peninsula Restoration</h2>
              <blockquote className="border-l-4 border-forest-300 pl-6 mb-6 italic text-abbey-600">
                <p className="mb-2">&ldquo;Nisi granum frumenti cadens in terram mortuum fuerit, ipsum solum manet.&rdquo;</p>
                <p>&ldquo;Unless a grain of wheat falls into the earth and dies, it remains alone.&rdquo; &mdash; John 12:24</p>
              </blockquote>
              <p className="text-abbey-700 leading-relaxed mb-4">
                Samsuryeong MooMoo Ranch is a seed. It is small. It is planted at altitude, in harsh conditions, in a place
                the world has largely forgotten. But it carries within it the complete genetic code of something much
                larger: a rural restoration model for the Korean Peninsula.
              </p>
              <p className="text-abbey-700 leading-relaxed mb-4">
                This seed contains 50 years of missionary prayer and labor. It contains the regenerative wisdom of
                Polyface Farm and the alpine resilience of Swiss highland dairy. It contains the creation theology of
                Genesis, the community ethic of Benedictine monasticism, and the multiplication logic of Heifer
                International&apos;s &ldquo;Passing on the Gift.&rdquo;
              </p>
              <p className="text-abbey-700 leading-relaxed">
                And it contains the personal testimony of a man born in North Korea&apos;s highland mines, who crossed
                borders and decades to arrive at a ranch established by American missionaries on a Korean mountaintop,
                and who now tends Jersey cattle at the same elevation as the villages of his childhood &mdash; preparing, in
                faith, for the day when the gift can be returned.
              </p>
            </div>

            {/* Location Info */}
            <div className="bg-abbey-100/50 rounded-lg p-6 border border-abbey-200 text-center">
              <p className="text-sm font-medium text-abbey-700">Samsuryeong MooMoo Ranch</p>
              <p className="text-sm text-abbey-500 mt-1">Taebaek, Gangwon Province, Republic of Korea &mdash; 1,000m Elevation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
