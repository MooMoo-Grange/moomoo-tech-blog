"use client"

import { useState } from "react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

/* ═══════════════════════════════════════════
   AT THE TABLE IN THE WILDERNESS
   Full archival content adapted for Next.js
═══════════════════════════════════════════ */

type PageId =
  | "home"
  | "timeline"
  | "founding"
  | "community"
  | "trials"
  | "architecture"
  | "grange"
  | "theology"
  | "legacy"

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "timeline", label: "Timeline" },
  { id: "founding", label: "Founding Vision" },
  { id: "community", label: "Community Life" },
  { id: "trials", label: "Trials & Testing" },
  { id: "architecture", label: "Architecture" },
  { id: "grange", label: "Watershed Grange" },
  { id: "theology", label: "Theology" },
  { id: "legacy", label: "Legacy" },
]

/* ─── Reusable Building Blocks ─── */

function Hero({ title, subtitle, tag }: { title: string; subtitle?: string; tag?: string }) {
  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-12 text-center">
      <h1 className="font-serif text-3xl sm:text-4xl font-medium text-abbey-900 mb-4 tracking-tight leading-tight text-balance">
        {title}
      </h1>
      {subtitle && (
        <p className="font-serif text-lg sm:text-xl text-abbey-700 italic leading-relaxed max-w-[540px] mx-auto">
          {subtitle}
        </p>
      )}
      {tag && (
        <p className="text-xs text-abbey-500 mt-6 tracking-widest uppercase">{tag}</p>
      )}
    </section>
  )
}

function Divider() {
  return (
    <div className="my-10 sm:my-14 flex items-center justify-center gap-4">
      <span className="h-px bg-abbey-200 flex-1 max-w-[120px]" />
      <span className="text-forest-500 text-lg">+</span>
      <span className="h-px bg-abbey-200 flex-1 max-w-[120px]" />
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-abbey-900 mt-12 mb-6 leading-snug">
      {children}
    </h2>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-xl font-medium text-abbey-900 mt-10 mb-4 leading-snug">
      {children}
    </h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base sm:text-lg text-abbey-800 leading-relaxed mb-5 font-serif">{children}</p>
  )
}

function PullQuote({ children, by }: { children: React.ReactNode; by?: string }) {
  return (
    <blockquote className="my-10 sm:my-12 py-6 px-5 sm:px-7 border-l-[3px] border-forest-400 bg-abbey-50 rounded-r-sm">
      <p className="font-serif text-base sm:text-lg leading-relaxed text-abbey-700 italic">
        {children}
      </p>
      {by && (
        <p className="text-sm text-abbey-500 mt-3 not-italic tracking-wide uppercase">
          — {by}
        </p>
      )}
    </blockquote>
  )
}

function ScriptureVerse({ children, reference }: { children: React.ReactNode; reference: string }) {
  return (
    <blockquote className="my-10 py-5 px-5 sm:px-7 text-center">
      <p className="font-serif text-base sm:text-lg italic text-forest-700 leading-relaxed mb-2">{children}</p>
      <p className="text-sm text-forest-500 tracking-wide uppercase">{reference}</p>
    </blockquote>
  )
}

function Photo({ desc, caption }: { desc: string; caption?: string }) {
  return (
    <figure className="my-8 sm:my-10 rounded-sm overflow-hidden">
      <div className="bg-abbey-100 border border-abbey-200 aspect-[16/10] flex items-center justify-center">
        <p className="text-sm text-abbey-500 text-center px-6 italic">[ {desc} ]</p>
      </div>
      {caption && (
        <figcaption className="text-sm text-abbey-500 mt-2 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function Significance({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 py-4 px-5 bg-forest-50 border-l-2 border-forest-600 rounded-r-sm">
      <p className="text-xs font-semibold text-forest-700 uppercase tracking-wider mb-2">
        Historical Significance
      </p>
      <p className="font-serif text-base text-abbey-700 leading-relaxed">{children}</p>
    </div>
  )
}

function Lesson({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-6 py-5 px-5 sm:px-7 bg-abbey-50 rounded-sm">
      <p className="font-serif text-base sm:text-lg text-abbey-900 font-medium mb-2">{title}</p>
      <p className="font-serif text-base text-abbey-700 leading-relaxed">{children}</p>
    </div>
  )
}

function NextLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <div className="mt-12 sm:mt-16 pt-6 border-t border-abbey-200 text-center">
      <p className="text-xs text-abbey-500 uppercase tracking-widest mb-2">Continue Reading</p>
      <button
        onClick={onClick}
        className="font-serif text-lg text-abbey-800 hover:text-forest-600 transition-colors"
      >
        {label} &rarr;
      </button>
    </div>
  )
}

function TEntry({ date, event, sig }: { date: string; event: string; sig: string }) {
  return (
    <div className="relative pl-7 sm:pl-9 pb-10 last:pb-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-abbey-200 after:absolute after:left-[-4px] after:top-[6px] after:w-[9px] after:h-[9px] after:rounded-full after:bg-forest-500 after:border-2 after:border-abbey-50">
      <p className="text-sm font-semibold text-forest-600 uppercase tracking-wider mb-1">{date}</p>
      <p className="font-serif text-base sm:text-lg text-abbey-900 leading-relaxed mb-1">{event}</p>
      <p className="font-serif text-sm sm:text-base text-abbey-600 italic leading-relaxed">{sig}</p>
    </div>
  )
}

function TimelineEra({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-abbey-900 mt-12 mb-8 leading-snug">
      {children}
    </h2>
  )
}

/* ═══════════════════════════════════════════
   SECTION NAV (within page)
═══════════════════════════════════════════ */

function SectionNav({
  current,
  goTo,
  open,
  setOpen,
}: {
  current: PageId
  goTo: (p: PageId) => void
  open: boolean
  setOpen: (v: boolean) => void
}) {
  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm text-abbey-600 hover:text-forest-700 transition-colors py-2"
        aria-label="Toggle chapter navigation"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="uppercase tracking-wider font-medium">Chapters</span>
      </button>
      {open && (
        <nav className="mt-2 bg-abbey-50 border border-abbey-200 rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`text-left py-2 px-3 rounded text-sm transition-colors ${
                  current === item.id
                    ? "text-forest-700 bg-forest-50 font-medium"
                    : "text-abbey-600 hover:text-forest-700 hover:bg-abbey-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE CONTENT
═══════════════════════════════════════════ */

function HomePage({ goTo }: { goTo: (p: PageId) => void }) {
  return (
    <>
      <Hero
        title="A Table in the Wilderness"
        subtitle="Since 1964, a community of prayer, labor, and radical dependence on God in the mountains of Korea."
        tag="Jesus Abbey &middot; Kangwon Province &middot; Founded 1964"
      />
      <Photo
        desc="Panoramic view of Jesus Abbey from the mountain approach, showing the seven-level structure nestled in the Kangwon Province mountains"
        caption="Jesus Abbey, Kangwon Province, Republic of Korea"
      />
      <Divider />
      <P>
        In 1964, Archer and Jane Torrey left seven years of seminary teaching in Seoul and walked
        into the mountains of Kangwon Province with a question that would shape the next four
        decades: Could the Christian life be taught not from textbooks, but from the lived reality of
        community, prayer, and shared labor?
      </P>
      <P>
        The answer became Jesus Abbey&#8212;a community built on rock, sustained by providence, and tested
        by wilderness.
      </P>
      <P>
        Archer Torrey had spent years developing a curriculum he called &ldquo;The Three Laboratories of
        the Christian Life,&rdquo; a framework for understanding the Christian&apos;s relationship to God, to
        fellow believers, and to the world. But in the classrooms of St. Michael&apos;s Seminary, theory
        outpaced experience. The students, Archer and Jane both came to realize, had goals that
        diverged from the curriculum&apos;s intent. The laboratories existed on paper. What was needed was
        a place where they could exist in practice.
      </P>
      <PullQuote by="Archer Torrey, as recorded by Jane Grey Torrey">
        We should go out into the wilderness, far from the cities, and develop a farm and a community
        of Christians and have the laboratory we had only talked about at the seminary.
      </PullQuote>
      <P>
        On May 10, 1964, a plot of mountainous land was acquired near the village of Hasami in
        Kangwon Province. A six-week tent camp followed, with volunteers clearing ground, cutting
        timber, and laying foundations. When the Torrey family moved into the first completed level
        of their mountainside house on December 21, 1965, they arrived to a structure anchored&#8212;quite
        literally&#8212;on an immovable rock that the builders had tried and failed to remove. The rock,
        too large to excavate, became the building&apos;s foundation. During the rainy season that
        followed, the side of the house not attached to rock shifted six inches. The side anchored to
        it held firm.
      </P>
      <P>The metaphor was not lost on anyone.</P>
      <Divider />
      <P>
        From the beginning, Jesus Abbey operated on a single financial principle: &ldquo;If we want to do
        something, and there is money to do it, we will go ahead. If there is no money, we will back
        off and seek His will again.&rdquo; No fundraising campaigns. No endowment. The community would
        depend entirely on God&apos;s provision, using the presence or absence of resources as a gauge of
        divine direction. Over the decades, this principle was tested repeatedly&#8212;and repeatedly
        confirmed. As inflation in Korea rose at ten percent annually, provision for the Abbey
        increased by twenty percent or more each year.
      </P>
      <P>
        Daily life at the Abbey established a rhythm that has continued for over forty years: Holy
        Communion each morning, intercessory prayer at noon, and evening prayer with Bible study.
        These three daily services, totaling approximately two and a half hours, constitute a tithe
        of the community&apos;s waking time&#8212;a practice the founders considered non-negotiable. Between
        services, the community engaged in farming, construction, dairying, cooking, and the constant
        physical maintenance that mountain living demands.
      </P>
      <Divider />
      <P>
        The Abbey&apos;s history is not a story of unbroken tranquility. A tent fire destroyed supplies
        and living quarters on February 14, 1966. A carpenter hired to help build the house attacked
        the community with a gang. Police investigations, village hostility, and internal conflicts
        tested the experiment at every stage. In 1968, 120 North Korean guerrillas landed at Uljin
        and followed the Partisan Trail through the mountains surrounding the Abbey, bringing the ROK
        Army to camp on the common room floor for six weeks. Through each crisis, the community
        discovered what Jane Torrey would later describe as God&apos;s faithfulness to &ldquo;not let his
        children be tempted beyond what they are able to bear.&rdquo;
      </P>
      <P>
        By 2005, four decades after the first tent was pitched on a mountainside, Jesus Abbey had
        grown to thirty-five regular members, fifteen novices, and thirty-five children. Its fortieth
        postulants&apos; class enrolled seventeen people. Self-support projects&#8212;farming, dairy operations,
        and light industry&#8212;provided sixty percent of the community&apos;s income, with the remaining forty
        percent arriving as what Jane Torrey called &ldquo;manna from heaven.&rdquo; Up to ten thousand visitors
        came each year to pray, study, receive counsel, and experience life in community.
      </P>
      <P>
        The Watershed Grange, a 160-acre detached farm acquired in 1976 at the three-way watershed
        divide between the Naktong River, the Han River, and the Fifty Creeks drainage, extended the
        Abbey&apos;s agricultural and training vision across the mountain landscape. Villages between the
        Abbey and its affiliated Kaljon Priory, once without any churches, now had congregations.
      </P>
      <PullQuote by="Jane Grey Torrey">
        We have lived by miracles all these years. This is God&apos;s table in the wilderness.
      </PullQuote>
      <P>
        Jesus Abbey remains what it was intended to be from its founding: a laboratory of Christian
        community, a place of intercession, and a demonstration that radical dependence on God is not
        merely a theological proposition but a way of life that can be sustained across generations.
        The story recorded here, drawn from Jane Grey Torrey&apos;s documentary account, is offered not as
        hagiography but as historical testimony&#8212;an institutional record of what happened when a small
        community chose to build on rock and trust the Provider.
      </P>
      <Photo
        desc="The Common Room fireplace, heart of the Abbey community"
        caption="The Common Room fireplace &#8212; heart of the Abbey"
      />
      <NextLink label="Historical Timeline" onClick={() => goTo("timeline")} />
    </>
  )
}

function TimelinePage({ goTo }: { goTo: (p: PageId) => void }) {
  return (
    <>
      <Hero title="Historical Timeline" subtitle="A chronological record, 1957&#8211;2005" tag="Documentary Archive" />
      <Divider />
      <TimelineEra>Founding Era (1957&#8211;1965)</TimelineEra>
      <TEntry date="1957" event="Archer and Jane Torrey begin teaching at St. Michael's Seminary, Seoul. Archer develops 'Three Laboratories of the Christian Life' curriculum." sig="Seven-year theological formation period that seeds the Abbey vision." />
      <TEntry date="c. 1963" event="Both Archer (in Canada) and Jane (in Korea) independently conclude that theology must be taught through lived experience rather than books alone." sig="Simultaneous divine leading confirms the call to a new model of formation." />
      <TEntry date="May 10, 1964" event="Land acquired near Hasami village, Kangwon Province. Six-week tent camp begins with volunteer workers clearing ground and cutting timber." sig="Physical founding. The wilderness site is deliberately chosen for remoteness and cheap mountain land." />
      <TEntry date="Summer 1964" event="Construction of first level begins. Workers discover an immovable rock at the foundation site; building must be constructed directly on it." sig="Providential foundation: the rock anchors the structure during subsequent rainy-season landslip." />
      <TEntry date="Dec. 21, 1965" event="Torrey family (Archer, Jane, Ben, Yancey) moves into the first completed level of the Abbey house." sig="Community life begins in earnest. Daily pattern of communion, intercession, and evening prayer established." />
      <Divider />
      <TimelineEra>Early Trials and Growth (1966&#8211;1968)</TimelineEra>
      <TEntry date="Feb. 14, 1966" event="Tent fire during evening prayer destroys the army tent, girls' quarters, tools, and materials." sig="First major material loss. Community discovers that crisis during worship deepens collective resilience." />
      <TEntry date="1966" event="Illegal wood incident leads to police investigation. Abbey offers restitution at 20% above cost per biblical principle." sig="Establishes the community's integrity standard with local authorities and villagers." />
      <TEntry date="1966" event="Hired carpenter attacks Abbey with a gang, throwing rocks through windows. Community responds with forgiveness." sig="Forgiveness theology (Matthew 18, Luke 17) tested in practice. Village relationships eventually restored." />
      <TEntry date="Easter 1967" event="Golden cross erected on hillside. At Easter sunrise communion, sunlight strikes the gilded cross and it shines 'like the sun.'" sig="Iconic spiritual moment. The cross becomes a permanent symbol of resurrection hope." />
      <TEntry date="1967" event="Pastor Cho Byong-Ho visits bring Holy Spirit renewal. Community transformed." sig="Spiritual breakthrough. Daily pattern deepens: 2.5 hours of corporate worship becomes normative." />
      <TEntry date="1967-68" event="Pastor Albert Cho establishes Priory of John the Baptist at Kaljon." sig="First major satellite community. Kaljon Priory grows to 300 retreatants." />
      <TEntry date="Late 1968" event="120 North Korean guerrillas land at Uljin. ROK Army occupies Abbey for six weeks." sig="Most severe external security crisis. Brothers share the gospel with soldiers during occupation." />
      <TEntry date="1968" event="Gang rivalry: two former gang leaders confront each other with a knife. Prayer intervention leads to reconciliation." sig="Demonstrates the community's capacity as a space for reconciliation." />
      <Divider />
      <TimelineEra>Expansion and Maturation (1969&#8211;1980)</TimelineEra>
      <TEntry date="1974" event="Archer and Jane attend Jerusalem Holy Spirit Conference. Meet Louise Ericson." sig="International connections expand. Seeds planted for Watershed Grange acquisition." />
      <TEntry date="1975" event="Paul and Barbara Kingsbury, Presbyterian missionaries, join the community." sig="Cross-denominational unity in practice." />
      <TEntry date="Sept. 1, 1976" event="Community votes to acquire 160-acre Pijae property. Becomes the Watershed Grange." sig="Major expansion. 'Grange' = 'a detached farm belonging to an Abbey.'" />
      <TEntry date="Easter 1976" event="Jeremiah Chu and Esther Kim marry. They pioneer the Watershed Grange." sig="First family unit dedicated to Grange development." />
      <TEntry date="1977" event="Jesus Evangelistic Band holds six-week school. 30+ participants." sig="Theological education for laymen attracts 36 students — more than the seminary had." />
      <TEntry date="Jan. 19, 1978" event="Archer's 60th birthday (hwan gap) celebrated. Park Dong-jin performs the gospel in pansori." sig="Cultural integration milestone." />
      <Divider />
      <TimelineEra>Continued Development (1980s&#8211;2005)</TimelineEra>
      <TEntry date="1980s" event="Ben Torrey returns. International workers arrive from multiple countries." sig="Community becomes increasingly international while maintaining Korean foundation." />
      <TEntry date="c. 2000" event="New building and dormitory built for up to 10,000 annual visitors." sig="Physical capacity expands to meet growing demand." />
      <TEntry date="c. 2004" event="Three Seas Watershed Training Center approved by six government bureaus." sig="Government recognition of community's educational role." />
      <TEntry date="2005" event="40th postulants' class enrolls 17 people. 35 members, 15 novices, 35 children. Self-support: 60%." sig="Four decades of continuous operation. Original vision substantially realized." />
      <TEntry date="2005" event="Jane Grey Torrey publishes At the Table in the Wilderness." sig="Institutional memory preserved. Primary historical source for subsequent scholarship." />
      <NextLink label="The Founding Vision" onClick={() => goTo("founding")} />
    </>
  )
}

function FoundingPage({ goTo }: { goTo: (p: PageId) => void }) {
  return (
    <>
      <Hero title="The Founding Vision" subtitle="From seminary classroom to mountain wilderness &#8212; a theology made flesh" tag="Our Story" />
      <Divider />
      <SectionTitle>From Seminary to Wilderness</SectionTitle>
      <P>For seven years, Archer and Jane Torrey taught at St. Michael&apos;s Seminary in Seoul, South Korea. Archer had developed a prize-winning curriculum called &ldquo;The Three Laboratories of the Christian Life,&rdquo; which structured the Christian journey into three relational dimensions: the believer&apos;s relationship to God, to fellow Christians, and to the world.</P>
      <P>Despite the curriculum&apos;s intellectual rigor, both Archer and Jane came to the same conclusion independently&#8212;Archer at a meeting in Canada, Jane in Korea. As Jane later recorded: &ldquo;We thought, &#8216;There must be a better way to teach theology than just out of books.&#8217;&rdquo; The students&apos; goals, they recognized, diverged from the curriculum&apos;s transformative intent. What was needed was an actual laboratory&#8212;a place where the Christian life could be practiced, not merely studied.</P>
      <Photo desc="Archer Torrey teaching &#8212; St. Michael's Seminary era photograph" caption="Archer Torrey during the seminary years in Seoul" />
      <Divider />
      <SectionTitle>The Three Laboratories of the Christian Life</SectionTitle>
      <SubTitle>Laboratory One: Relationship to God</SubTitle>
      <P>The first laboratory concerned the individual&apos;s direct encounter with God through prayer, worship, and reception of the Holy Spirit. At the Abbey, this would be expressed through daily Holy Communion, personal prayer disciplines, and an openness to the Spirit&apos;s leading that the seminary classroom could not replicate.</P>
      <SubTitle>Laboratory Two: Relationship to Fellow Christians</SubTitle>
      <P>The second laboratory addressed the challenge of living authentically with other believers. Community life&#8212;sharing meals, labor, resources, and daily worship&#8212;would create the conditions for genuine spiritual formation through friction, forgiveness, and mutual dependence. As Archer argued: &ldquo;If we live together with people of like mind, sharing our work, our goods, and our prayers, we can make a great big fire for the Lord.&rdquo;</P>
      <SubTitle>Laboratory Three: Relationship to the World</SubTitle>
      <P>The third laboratory focused outward: evangelism, service to rural Korea, agricultural demonstration, and hospitality to all who came. The Abbey would not be a retreat from the world but a base of engagement with it&#8212;a training center, conference center, demonstration area, and &ldquo;power source through prayer.&rdquo;</P>
      <Divider />
      <SectionTitle>The Theology of Financial Dependence</SectionTitle>
      <PullQuote by="Archer Torrey, as recorded by Jane Grey Torrey">
        God, who has all the money in the world, will know what we need and He will send it. We can use this principle as a gauge to know His will. If we want to do something, and there is money to do it, we will go ahead. If there is no money, we will back off and seek His will again.
      </PullQuote>
      <P>This was not passive waiting but active discernment. The presence or absence of financial provision functioned as a spiritual instrument&#8212;a means of reading divine direction. Dependence on God did not mean dependence on donors.</P>
      <P>Over four decades, this financial principle proved remarkably durable. While Korean inflation averaged ten percent annually, the Abbey&apos;s provision consistently exceeded inflation. By 2005, self-support projects covered sixty percent of operating costs.</P>
      <Divider />
      <SectionTitle>Community as Spiritual Laboratory</SectionTitle>
      <P>Archer&apos;s vision was specific: a community would go into the wilderness, deliberately far from cities, and build a farm alongside a fellowship of Christians who would practice the three laboratories in real conditions. The community would accept all who came, provided they were willing to help with work and keep the community&apos;s rules. The Holy Spirit, Archer believed, would &ldquo;send the right people and send away the ones who do not belong.&rdquo;</P>
      <P>The resulting community developed a membership structure of Members, Novices, and Postulants&#8212;echoing monastic tradition while remaining ecumenical and open to laypersons. Conflicts were addressed through a theology of aggressive forgiveness drawn from Matthew 18 and Luke 17. The goal was not the absence of conflict but its redemptive resolution.</P>
      <ScriptureVerse reference="Romans 8:32">He that spared not his own Son but delivered him up for us all, how shall he not with him give us freely all things?</ScriptureVerse>
      <NextLink label="Community Life" onClick={() => goTo("community")} />
    </>
  )
}

function CommunityPage({ goTo }: { goTo: (p: PageId) => void }) {
  return (
    <>
      <Hero title="Community Life and Spiritual Rhythm" subtitle="Prayer, labor, and the daily discipline of shared life" tag="Life at the Abbey" />
      <Divider />
      <SectionTitle>The Daily Office: Tithing Time</SectionTitle>
      <P>From its earliest months, Jesus Abbey established a pattern of three daily services that has continued for over four decades. The community understood this rhythm as a tithe of their waking hours&#8212;approximately two and a half hours each day given to corporate worship and prayer.</P>
      <SubTitle>Morning: Holy Communion</SubTitle>
      <P>Each day began with a communion service. From the tent camp of 1964 through every subsequent expansion and crisis, the morning Eucharist anchored the community&apos;s identity. It was at the daybreak communion service on Easter morning 1967 that sunlight struck the newly erected golden cross on the hillside and the community witnessed it shine &ldquo;like the sun.&rdquo;</P>
      <SubTitle>Noon: Intercession</SubTitle>
      <P>At midday, the community gathered for intercessory prayer&#8212;prayers for peace, for the church in Korea, for personal needs of members and visitors, and for the nations. As Jane Torrey wrote, the prayers of a community &ldquo;are more likely to be heard and answered as we make a bigger channel for God to come through.&rdquo;</P>
      <SubTitle>Evening: Prayer and Bible Study</SubTitle>
      <P>The evening gathering combined prayer with extended Bible study and discussion. It was during evening prayer on February 14, 1966, that the tent fire broke out, interrupting the community&apos;s reading of Scripture with a crisis that would test their nascent communal bonds.</P>
      <Photo desc="Community gathered for worship in the Common Room, altar and cross visible" caption="Worship in the Common Room" />
      <Divider />
      <SectionTitle>Shared Labor</SectionTitle>
      <P>Work at Jesus Abbey was not ancillary to spiritual life but integral to it. The community cleared land, constructed buildings, tended cattle, planted crops, cooked meals for as many as two hundred people, carried water, maintained fires, and made the constant repairs that a seven-level mountain structure demands.</P>
      <P>This integration of labor and prayer reflected the Abbey&apos;s incarnational theology. The community sang at work. A transformation in attitudes was noted after the Holy Spirit renewal of 1967: members approached their daily tasks with a new sense of responsibility and joy.</P>
      <Divider />
      <SectionTitle>Conflict and Reconciliation</SectionTitle>
      <P>Jane Torrey&apos;s account is candid about interpersonal conflict. The Torreys at times questioned whether God had truly called them to this work: &ldquo;Is it possible to form a &#8216;family&#8217; from such different kinds of people?&rdquo;</P>
      <P>The community&apos;s response was a theology of forgiveness that was neither passive nor sentimental. Drawing on Matthew 18 and Luke 17, forgiveness at Jesus Abbey was understood as an aggressive, active display of love&#8212;a practice tested repeatedly by incidents ranging from theft to physical violence.</P>
      <Divider />
      <SectionTitle>Membership Structure</SectionTitle>
      <P>The community developed a threefold structure: Postulants (initial trial), Novices (extended formation), and Members (fully committed). By 2005, the fortieth postulants&apos; class was enrolling, with a typical cohort of seventeen participants.</P>
      <NextLink label="Trials &amp; Testing" onClick={() => goTo("trials")} />
    </>
  )
}

function TrialsPage({ goTo }: { goTo: (p: PageId) => void }) {
  return (
    <>
      <Hero title="Trials and Testing" subtitle="The crises that shaped a community's character" tag="A Documentary Record" />
      <Divider />
      <P>The history of Jesus Abbey is inseparable from the crises that shaped it. Jane Grey Torrey&apos;s account records each trial with the specificity of institutional memory, understanding them not as interruptions but as formative events.</P>
      <SectionTitle>The Tent Fire (February 14, 1966)</SectionTitle>
      <P>During evening prayer on St. Valentine&apos;s Day, 1966, a sudden flash filled the large front window of the common room. The army tent was engulfed in flames. The girls&apos; quarters, tools, and materials were lost. No one was injured. The wind blew in a direction that prevented the fire from spreading.</P>
      <Significance>The fire was the community&apos;s first experience of catastrophic material loss. It demonstrated that the Abbey&apos;s identity was not located in its physical infrastructure but in its people and their shared commitment.</Significance>
      <Divider />
      <SectionTitle>The Carpenter Attack (1966)</SectionTitle>
      <P>A carpenter who had been hired became drunk and organized a gang to attack the Abbey. Rocks were thrown through windows. The community&apos;s response was forgiveness. No charges were pressed. Over time, the relationships were restored.</P>
      <Significance>The carpenter attack demonstrated that the community&apos;s commitment to forgiveness could survive its most challenging application: forgiving those who had physically harmed them.</Significance>
      <Divider />
      <SectionTitle>The Guerrilla Crisis (1968)</SectionTitle>
      <P>In late 1968, 120 heavily armed North Korean guerrillas landed at Uljin and headed into the mountains along the Partisan Trail&#8212;a route passing directly through the area surrounding Jesus Abbey.</P>
      <P>The ROK Army occupied the Abbey for six weeks. The community received emergency protocols: guard the premises day and night, never use flashlights, hang laundry on the opposite side of the house as a secret signal if North Koreans appeared.</P>
      <P>During the occupation, the Abbey&apos;s brothers shared the gospel with the soldiers. All 120 guerrillas were eventually killed. Two remaining guerrillas approached the Abbey area but chose a neighboring house instead, where they were captured.</P>
      <Significance>The guerrilla crisis was the Abbey&apos;s most severe external security threat. The community continued its life of prayer under military occupation&#8212;and used the crisis as an evangelistic opportunity.</Significance>
      <Divider />
      <SectionTitle>The Gang Rivalry Incident</SectionTitle>
      <P>Two former gang leaders from the same city both found themselves at Jesus Abbey. They recognized each other, and one drew a knife. The community intervened with prayer. The crisis ended in reconciliation.</P>
      <Significance>The Abbey could function as a space of transformation not only for its own members but for individuals carrying violent histories from beyond its walls.</Significance>
      <Divider />
      <SectionTitle>Internal Conflicts</SectionTitle>
      <P>Jane Torrey does not minimize internal struggles. At points, the founders themselves questioned whether the experiment was viable: &ldquo;Have we misunderstood your leading?&rdquo;</P>
      <P>These trials are presented not as failures but as the essential friction of the &ldquo;second laboratory&rdquo;&#8212;the furnace of community life in which authentic spiritual formation occurs.</P>
      <ScriptureVerse reference="1 Corinthians 10:13">God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.</ScriptureVerse>
      <NextLink label="Architecture" onClick={() => goTo("architecture")} />
    </>
  )
}

function ArchitecturePage({ goTo }: { goTo: (p: PageId) => void }) {
  return (
    <>
      <Hero title="Architecture and Physical Development" subtitle="From tent to stone &#8212; building the Abbey" tag="The Built Record" />
      <Divider />
      <P>The physical development of Jesus Abbey is itself a theological narrative. Every structure carries both practical function and symbolic resonance.</P>
      <SubTitle>The Tent (1964)</SubTitle>
      <P>Construction began under canvas. A large army tent served as living quarters, workspace, and storage. The tent period represented the community&apos;s willingness to begin before conditions were comfortable.</P>
      <Photo desc="Zion Under Construction with the Tent &#8212; original photograph" caption="Zion Under Construction &#8212; the tent camp, 1964" />
      <SubTitle>The Rock Foundation</SubTitle>
      <P>Workers encountered an immovable rock at the foundation site. The deeper they dug, the larger it proved. The only option was to build directly on the rock. During the rainy season, the side of the house not anchored to rock slipped six inches while the rock-anchored side held firm. Jane Torrey&apos;s reflection: &ldquo;God was guiding us to build our house upon a rock.&rdquo;</P>
      <SubTitle>The Seven-Level Structure</SubTitle>
      <P>Subsequent construction extended down the mountainside, resulting in a structure built on seven levels. The number seven&#8212;carrying biblical associations of completeness&#8212;was the result of topographic necessity, but the community noted the resonance.</P>
      <Divider />
      <SectionTitle>The Common Room</SectionTitle>
      <P>Built of local rocks and hand-hewn timbers, it served as chapel, dining hall, meeting space, and gathering place. At one end stood the altar; at the other, the kitchen. A large fireplace provided heat and light.</P>
      <P>That first year, the fire&#8212;&ldquo;the heart of the house&rdquo;&#8212;never went out. Brothers rose during the night to carry wood from the forest. The perpetual fire was both practical necessity and an unplanned metaphor for the community&apos;s commitment to maintaining warmth through continuous effort.</P>
      <Photo desc="The Common Room and Fireplace" caption="The Common Room and its fireplace &#8212; heart of the Abbey" />
      <Divider />
      <SectionTitle>The Altar and the Easter Cross</SectionTitle>
      <P>For Easter 1967, a cross was built&#8212;six feet high with rays extending from the center&#8212;cemented on the hillside and gilded with gold paint. At the Easter morning communion service, as the sun crested the ridge, light struck the cross and &ldquo;the cross itself shone like the sun.&rdquo;</P>
      <P>The Easter cross remains at the Abbey, catching the sunrise each Easter morning as it did in 1967.</P>
      <ScriptureVerse reference="Ephesians 3:20-21">Now unto him who is able to do exceedingly abundantly above all that we ask or think, according to the power that worketh in us, unto him be glory in the church by Christ Jesus throughout all ages, world without end.</ScriptureVerse>
      <Divider />
      <SectionTitle>Expansion and Later Construction</SectionTitle>
      <P>Each addition followed the founding financial principle: construction proceeded when resources arrived, and halted when they did not. No debt was incurred. No capital campaigns were launched. The buildings themselves testified to the same theology of provision that governed every other aspect of the community&apos;s life.</P>
      <NextLink label="The Watershed Grange" onClick={() => goTo("grange")} />
    </>
  )
}

function GrangePage({ goTo }: { goTo: (p: PageId) => void }) {
  return (
    <>
      <Hero title="The Watershed Grange" subtitle="A detached farm belonging to an Abbey &#8212; 160 acres at the three-way divide" tag="Agricultural Vision" />
      <Divider />
      <SectionTitle>Origin and Acquisition</SectionTitle>
      <P>By the mid-1970s, Jesus Abbey had outgrown its original site&apos;s capacity for agricultural development. During prayer, Archer Torrey encountered Psalm 37 with unusual force&#8212;multiple verses about &ldquo;inheriting the land.&rdquo;</P>
      <P>The first priority was a 160-acre tract at Pijae Pass, where the topography creates a three-way watershed divide. Water flowing to the Naktong River and South Sea; the Han River and West Sea; and the Fifty Creeks and East Sea.</P>
      <P>Elder Kim Sang Gyu discovered that five men who had failed at developing the land wanted to sell. The Abbey placed its seal on a promise to pay. The very next day, another buyer with significantly more money attempted to purchase&#8212;but the Abbey&apos;s seal was already on the documents.</P>
      <PullQuote by="Jane Grey Torrey">
        He looked in the dictionary and found that a grange is &ldquo;a detached farm belonging to an Abbey.&rdquo;
      </PullQuote>
      <Photo desc="The Three Seas Meadow &#8212; panoramic view" caption="The Three Seas Meadow at the Watershed Grange" />
      <Divider />
      <SectionTitle>Pioneering the Grange</SectionTitle>
      <P>Jeremiah Chu and Esther Kim, married on Easter Monday 1976, became the Grange&apos;s first residents&#8212;harsh mountain winters, isolation, the daily demands of cattle care. Subsequent workers followed, including Ian Wright from Australia, whose cattle expertise proved invaluable.</P>
      <Divider />
      <SectionTitle>Agricultural and Economic Vision</SectionTitle>
      <P>The Grange represented the maturation of the Abbey&apos;s self-support theology. By 2005, the combined self-support projects of the Abbey and Grange accounted for sixty percent of the community&apos;s total income&#8212;a substantial achievement for a community that had begun with nothing but a tent and a theological conviction.</P>
      <Divider />
      <SectionTitle>The Three Seas Watershed Training Center</SectionTitle>
      <P>Approval from six government bureaus transformed the Grange from a cattle operation into a people-focused educational and training facility&#8212;a significant evolution in how Jesus Abbey was perceived by Korean authorities.</P>
      <ScriptureVerse reference="Psalm 37:3">Trust in the Lord and do good, so shalt thou dwell in the land.</ScriptureVerse>
      <NextLink label="Theological Foundations" onClick={() => goTo("theology")} />
    </>
  )
}

function TheologyPage({ goTo }: { goTo: (p: PageId) => void }) {
  return (
    <>
      <Hero title="Theological Foundations" subtitle="The commitments woven through four decades of practice" tag="Academic Analysis" />
      <Divider />
      <P>The theological commitments underlying Jesus Abbey are not systematically presented in a doctrinal statement but are woven throughout the community&apos;s practices and recorded decisions.</P>
      <SectionTitle>Incarnational Theology</SectionTitle>
      <P>The Torreys entered Korean mountain life, adopted its rhythms and hardships, and built a community in which foreign and Korean Christians shared everything&#8212;food, labor, worship, and the ondol-heated floor of the Common Room.</P>
      <Divider />
      <SectionTitle>Divine Provision as Discernment</SectionTitle>
      <P>The community treated financial provision as a mode of divine communication. Over forty years, the community never missed a meal&#8212;feeding fifty to seventy people three times daily, and sometimes two hundred.</P>
      <Divider />
      <SectionTitle>Community as Spiritual Formation</SectionTitle>
      <P>The most distinctive theological contribution of Jesus Abbey is its understanding of intentional community as the primary means of spiritual formation. To live at Jesus Abbey was to live in a permanent school of reconciliation.</P>
      <Divider />
      <SectionTitle>Suffering and Purification</SectionTitle>
      <P>The community chose the wilderness deliberately, knowing that hardship was not an unfortunate side effect but an essential ingredient of the formation they sought.</P>
      <Divider />
      <SectionTitle>Prayer as Central Governance</SectionTitle>
      <P>Prayer was not one activity among many but the community&apos;s central governing practice. Major decisions were processed through prayer before and alongside practical deliberation.</P>
      <Divider />
      <SectionTitle>Unity Across Denominational Lines</SectionTitle>
      <P>The community was deliberately ecumenical&#8212;Anglican, Presbyterian, Pentecostal&#8212;united not by denomination but by shared commitment to community life, prayer, and the three laboratories.</P>
      <Divider />
      <SectionTitle>Mission to Rural Korea</SectionTitle>
      <P>The choice of a remote location was itself a theological statement. Villages between the Abbey and Kaljon that had never had churches acquired them. Spiritual and material transformation were inseparable.</P>
      <NextLink label="Legacy &amp; Historical Impact" onClick={() => goTo("legacy")} />
    </>
  )
}

function LegacyPage({ goTo }: { goTo: (p: PageId) => void }) {
  return (
    <>
      <Hero title="Legacy and Historical Impact" subtitle="Four decades of continuous operation &#8212; an analytical assessment" tag="Historical Analysis" />
      <Divider />
      <SectionTitle>Longevity and Institutional Continuity</SectionTitle>
      <P>By 2005, Jesus Abbey had operated continuously for over forty years&#8212;among the most enduring intentional Christian communities of the twentieth century. It survived founders&apos; aging, generational transitions, political crises, and Korea&apos;s rapid industrialization.</P>
      <P>The mechanisms of survival: a non-negotiable daily prayer rhythm; a financial theology that avoided debt; a membership structure that formalized commitment; and a theological framework that interpreted hardship as formation rather than failure.</P>
      <Divider />
      <SectionTitle>Influence on Korean Christianity</SectionTitle>
      <P>The theological course attracted thirty-six students&#8212;more than the seminary. The Kaljon Priory grew to three hundred retreatants and produced a denominational Moderator. By 2005, ten thousand visitors came annually.</P>
      <Divider />
      <SectionTitle>A Unique Model</SectionTitle>
      <P>Jesus Abbey combined Western monastic tradition with Korean cultural forms and Pentecostal-charismatic spirituality&#8212;a synthesis that was organic rather than programmatic. Few communities have achieved comparable integration while maintaining institutional coherence over multiple decades.</P>
      <Divider />
      <SectionTitle>Lessons for Contemporary Faith Communities</SectionTitle>
      <Lesson title="Financial theology as discernment">The practice of treating the arrival or absence of resources as divine communication produced a community that never incurred debt, never missed a meal, and reached sixty percent self-sufficiency.</Lesson>
      <Lesson title="Conflict as formation">Systematic practice of aggressive forgiveness avoided the idealization that destroys many communal experiments.</Lesson>
      <Lesson title="Integration of contemplation and labor">The refusal to separate spiritual life from physical work created a holistic formation model.</Lesson>
      <Lesson title="Institutional patience">The Watershed Grange illustrates the importance of long-term patience in ventures where success cannot be measured in quarterly increments.</Lesson>
      <Lesson title="Ecumenical unity in practice">Christians of different backgrounds can sustain deep communal life when united by shared practice rather than doctrinal agreement on every detail.</Lesson>
      <Divider />
      <PullQuote by="Archer Torrey">
        A place to learn to take up our cross daily, a place to learn to give rather than to receive, a base for evangelism, a training center, a conference center, a research agency, a demonstration area, a sending agency, a supporting agency, a supply base, and a power source through prayer.
      </PullQuote>
      <PullQuote by="Jane Grey Torrey">
        It is good to be in a position to have to depend on God because we find that his promises are true. If we could take care of everything ourselves we would never find out that he means it when he says that he will protect us, heal us, provide for us, guide us, and lead us into all truth.
      </PullQuote>
      <Divider />
      <div className="text-center mt-12">
        <p className="text-xs text-abbey-500 uppercase tracking-widest mb-3">End of Archive</p>
        <p className="font-serif text-base italic text-abbey-600 leading-relaxed max-w-md mx-auto">
          Historical content drawn from <em>At the Table in the Wilderness</em> by Jane Grey Torrey (2005).
        </p>
        <button onClick={() => goTo("home")} className="mt-8 font-serif text-lg text-abbey-800 hover:text-forest-600 transition-colors">
          &larr; Return to Home
        </button>
      </div>
    </>
  )
}

/* ═══════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════ */

export default function BookPage() {
  const [page, setPage] = useState<PageId>("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const goTo = (p: PageId) => {
    setPage(p)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const pages: Record<PageId, React.ReactNode> = {
    home: <HomePage goTo={goTo} />,
    timeline: <TimelinePage goTo={goTo} />,
    founding: <FoundingPage goTo={goTo} />,
    community: <CommunityPage goTo={goTo} />,
    trials: <TrialsPage goTo={goTo} />,
    architecture: <ArchitecturePage goTo={goTo} />,
    grange: <GrangePage goTo={goTo} />,
    theology: <TheologyPage goTo={goTo} />,
    legacy: <LegacyPage goTo={goTo} />,
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: "설립자", href: "/founders" },
        { label: "현재인 사모", href: "/founders/jane" },
        { label: "A Table in the Wilderness" },
      ]} />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        {/* Back link */}
        <Link
          href="/founders/jane"
          className="inline-flex items-center gap-1 text-sm text-abbey-500 hover:text-forest-700 transition-colors mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>현재인 사모 페이지로 돌아가기</span>
        </Link>

        {/* Chapter navigation */}
        <SectionNav current={page} goTo={goTo} open={menuOpen} setOpen={setMenuOpen} />

        {/* Content */}
        <article className="pb-12">
          {pages[page]}
        </article>

        {/* Book footer */}
        <footer className="border-t border-abbey-200 mt-8 pt-8 pb-4 text-center">
          <p className="font-serif text-lg text-abbey-800">Jesus Abbey</p>
          <p className="font-serif text-base italic text-abbey-600 mt-1">At the Table in the Wilderness</p>
          <p className="text-xs text-abbey-500 mt-1">
            Kangwon Province, Republic of Korea &middot; Founded 1964
          </p>
          <div className="my-6 flex items-center justify-center gap-4">
            <span className="h-px bg-abbey-200 flex-1 max-w-[120px]" />
            <span className="text-forest-400 text-sm">+</span>
            <span className="h-px bg-abbey-200 flex-1 max-w-[120px]" />
          </div>
          <p className="text-xs text-abbey-400 leading-relaxed">
            Historical content drawn from <em>At the Table in the Wilderness</em> by Jane Grey Torrey (2005).
          </p>
        </footer>
      </section>
    </>
  )
}
