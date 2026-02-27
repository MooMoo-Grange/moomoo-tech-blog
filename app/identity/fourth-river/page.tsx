import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata = { title: "네번째강 프로젝트 — The Fourth River Project" }

export default function FourthRiverPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "홈", path: "/" },
        { label: "정체성", path: "/identity" },
        { label: "네번째강 프로젝트" },
      ]} />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-3">네번째강 프로젝트</h1>
          <p className="text-lg text-abbey-500 mb-2">The Fourth River Project</p>
          <p className="text-sm text-abbey-400 mb-10">예수원의 북한 선교 사역</p>

          {/* Mission */}
          <div className="bg-forest-50 rounded-lg p-8 border border-forest-200 mb-10">
            <h2 className="text-xl font-serif font-bold text-forest-800 mb-4">Mission</h2>
            <p className="text-forest-700 leading-relaxed">
              The mission of The Fourth River Project is to work towards the healing of the divisions of
              the Korean Church and nation by teaching, calling for reconciliation and preparing servant
              workers in all walks of life to bear witness to our Lord and for the building of a new Korea
              on the foundation of Jesus Christ.
            </p>
          </div>

          {/* The Need */}
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">The Need</h2>
              <p className="text-abbey-700 leading-relaxed">
                In anticipation of a greater opening of North Korea in the near future, it is imperative that
                those who go in be prepared with a deep understanding of the culture, society, psychology,
                history and language of North Korea. Without such understanding, attempts to share the
                love of Jesus Christ in the North may well do more harm than good. It is also imperative
                that the South Korean Church approach this need united in heart and mind. A divided
                Church going in with each denomination or organization doing its own thing in competition
                with each other and without cooperation will bring into the North the divisions of the South.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Vision</h2>
              <p className="text-abbey-700 leading-relaxed">
                The vision of The Fourth River Project is that there be teams of men and women from all
                walks of life prepared to enter and live in North Korea, to express the love of Jesus Christ,
                seek reconciliation, build the Church of Jesus Christ and, with a deep understanding of the
                value of Biblical principles, assist in rebuilding Korean society.
              </p>
            </div>

            {/* Ultimate Objectives */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Ultimate Objectives</h2>
              <ul className="space-y-3 text-abbey-700">
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-1">&#x2022;</span>
                  <span>A new Korean nation that is built on Biblical principles</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-1">&#x2022;</span>
                  <span>A new society with a culture based on and expressing a Biblical world view</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-1">&#x2022;</span>
                  <span>A united Korean people carrying the Gospel onward to the most dangerous parts of the world</span>
                </li>
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-abbey-200" />

            {/* Three Seas Center */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-2">삼수령 센터</h2>
              <p className="text-sm text-abbey-500 mb-4">The Three Seas Center, Taebaek, Gangwon-do</p>
              <p className="text-abbey-700 leading-relaxed mb-6">
                The purpose of the Three Seas Center is to provide a place, strategically located, to equip
                members of the Body of Christ for service to God in South Korea, North Korea and to the
                ends of the earth through study, training, labor, prayer and a common life.
              </p>

              <h3 className="font-bold text-abbey-800 mb-3">Specifically, the Center is a place for:</h3>
              <ul className="space-y-3 text-abbey-700 text-sm">
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>Calling the Church of Jesus Christ to unity and equipping leaders to work towards this unity through their own congregations and denominations.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>{"Raising up the \"Unification Generation\", Korea's young people whose heritage is this divided land through camps, seminars and various other programs."}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>Providing workers from all nations with language, cultural and other training to prepare them to go live and work inside North Korea as it opens up.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>Providing a safe and welcoming environment for the healing of relationships between individuals from both North and South Korea.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                  <span>Networking with other groups, organizations and churches engaged in similar efforts and helping them work together.</span>
                </li>
              </ul>
            </div>

            {/* Location Significance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-abbey-200">
                <h3 className="font-serif font-bold mb-3">Symbolic Significance</h3>
                <ul className="space-y-3 text-sm text-abbey-700">
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>At the apex of the three-way watershed, where the three major river systems of South Korea have their sources, it is the &ldquo;source&rdquo; as Christ is our source from which wells up the River of Life.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>It is on the Baekdu Trail running the length of the Korean peninsula, symbolizing both the River of Life flowing north to North Korea and the call to God&apos;s people to go north with the Gospel. This is the Fourth River.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border border-abbey-200">
                <h3 className="font-serif font-bold mb-3">Strategic Significance</h3>
                <ul className="space-y-3 text-sm text-abbey-700">
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>Near Jesus Abbey &mdash; a community with 60 years of experience in intercessory prayer, communal life, and the value of labor. The community provides staff and program components.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>Removed from urban centers, providing opportunity to separate from the noise and pressure of the city to pray, think, study and work closely with others.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-forest-600 shrink-0 mt-0.5">&#x2022;</span>
                    <span>Mountain vistas and a natural environment to stretch a person&apos;s vision and excite about the possibilities.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-abbey-200" />

            {/* Director */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Director &mdash; Ben Torrey</h2>
              <p className="text-abbey-700 leading-relaxed mb-6">
                Ben Torrey grew up in Korea where he joined with his parents, Jane and Archer Torrey, in
                pioneering Jesus Abbey high in the Taebaek Mountains in Gangwon-do.
                He is ordained in the Syro-Chaldean Church of North America.
              </p>
              <div className="bg-white rounded-lg p-6 border border-abbey-200">
                <h3 className="font-bold text-sm text-abbey-600 mb-3">Career Timeline</h3>
                <div className="space-y-2">
                  {[
                    ["1965-1969", "Participated in the founding of Jesus Abbey"],
                    ["1975", "Graduated from Sarah Lawrence College"],
                    ["1978-1979", "Lived at Jesus Abbey with wife, Liz, participating in the work of the community"],
                    ["1979-2001", "IT systems design and development, knowledge management"],
                    ["1996-2003", "Director, The King's School, CT; Chairman of the Board from 1998"],
                    ["2002-2003", "Administrator, The King's School, Bolton, CT"],
                    ["2003", "Appointed director of the Three Seas Center, launched the Fourth River Project"],
                  ].map(([period, desc]) => (
                    <div key={period} className="flex gap-4 items-start text-sm">
                      <span className="text-forest-700 font-bold whitespace-nowrap min-w-[100px]">{period}</span>
                      <span className="text-abbey-700">{desc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-abbey-600 mt-4">
                  Ben and his wife Liz are members of Jesus Abbey and live at the Three Seas Center.
                  They also maintain an office and residence in the US.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-abbey-200" />

            {/* Contact */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-abbey-200">
                  <h3 className="font-bold mb-3">The Three Seas Center</h3>
                  <ul className="text-sm text-abbey-700 space-y-2">
                    <li>439 Baekdudaegan-ro</li>
                    <li>Taebaek-si, Gangwon-do 26024</li>
                    <li>Republic of Korea</li>
                    <li>Office: 033-552-1203</li>
                    <li>Korea Mobile: 010-4578-7824</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-abbey-200 mt-6">
                <h3 className="font-bold mb-3">US Office</h3>
                <ul className="text-sm text-abbey-700 space-y-2">
                  <li>PO Box 744, Vernon, CT 06066</li>
                  <li>Tel: 1-860-263-9204</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
