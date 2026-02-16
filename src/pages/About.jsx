import Button from "../components/Button";
import Section, { SectionHeader } from "../components/Section";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";

function About() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "巨磐資安培訓學院",
    "alternateName": "GiantRock Cybersecurity Academy",
    "url": "https://www.giantrocktw.com",
    "description": "專為台灣傳統製造業打造的實戰型資安培訓學院",
    "email": "service@giantrocktw.com",
    "areaServed": {
      "@type": "Country",
      "name": "TW"
    }
  };

  return (
    <>
      <SEO
        title="關於我們"
        description="了解巨磐資安培訓學院的使命與背景。我們致力於協助台灣中小企業建立堅實的資安防護能力，提供實戰導向、在地化的資安教育服務。"
        keywords="巨磐資安,資安培訓學院,拉資科科技,企業資安教育,資安夥伴,資安顧問"
        canonical="/about"
      />
      <StructuredData data={localBusinessSchema} />
    <div>
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-12 md:py-16 border-b-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            關於巨磐企業資安培訓學院
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            您的資安夥伴 — 專注台灣傳統製造業的資安教育與培訓
          </p>
        </div>
      </section>

      {/* Company Mission */}
      <Section>
        <SectionHeader
          title="我們的使命"
          subtitle="協助台灣中小企業建立堅實的資安防護能力"
        />
        <div className="max-w-4xl mx-auto">
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            在數位轉型的浪潮下，台灣傳統製造業面臨前所未有的資安威脅。從網路釣魚、勒索軟體到供應鏈攻擊，
            每一個環節都可能成為企業的弱點。然而，許多中小企業缺乏資安專業人才與資源，
            往往在遭受攻擊後才驚覺防護的重要性。
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            巨磐資安培訓學院成立的初衷，就是要填補這個缺口。我們相信，
            <span className="font-semibold text-primary-900 border-b-2 border-secondary-500">
              「資安不應該是大企業的專利，每一家企業都應該有能力保護自己的數位資產。」
            </span>
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            透過實戰導向的培訓課程、在地化的服務，以及對台灣製造業的深入理解，
            我們致力於讓資安教育變得更貼近企業需求、更容易落地執行。
          </p>
        </div>
      </Section>

      {/* Company History */}
      <Section bgColor="bg-gray-50">
        <SectionHeader title="公司背景" subtitle="深耕台灣，服務在地企業" />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 border-l-4 border-secondary-500 border border-gray-200">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              巨磐企業資安培訓學院是屬於
              <span className="font-semibold text-primary-900">
                拉資科科技有限公司
              </span>
              的資安教育品牌，
              專注於資訊安全教育與培訓服務。我們的團隊成員來自資安產業、製造業IT部門，
              以及教育訓練領域，深刻理解台灣中小企業在資安轉型過程中的痛點與需求。拉資科科技有限公司在伺服器代管、數位轉型領域耕耘多年，了解企業在數位化過程中面臨的挑戰，這些經驗也成為我們提供實用資安培訓的基石。
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              有別於傳統的資安顧問公司，我們更專注於
              <span className="font-semibold">「教育」而非「銷售」</span>。
              我們相信，唯有讓企業內部人員真正理解資安的重要性，並具備實戰能力，
              才能建立起長期有效的防護機制。
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionHeader title="核心價值" subtitle="三大支柱支撐我們的服務理念" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border-2 border-primary-500 hover:border-secondary-500 transition-colors duration-200">
            <div className="w-12 h-12 bg-secondary-500 mb-4"></div>
            <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">
              實用性 Practicality
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              我們堅持「接地氣」的教學方式，所有課程內容都來自台灣企業的真實案例。
              不談空泛理論，只教能立即應用在工作中的實戰技能。
            </p>
          </div>
          <div className="bg-white p-6 border-2 border-accent-500 hover:border-secondary-500 transition-colors duration-200">
            <div className="w-12 h-12 bg-accent-500 mb-4"></div>
            <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">
              創新性 Innovation
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              我們持續研發新的教學方法與培訓工具，例如互動式模擬演練、案例討論工作坊等，
              讓資安教育不再枯燥，而是充滿互動與啟發。
            </p>
          </div>
          <div className="bg-white p-6 border-2 border-primary-700 hover:border-secondary-500 transition-colors duration-200">
            <div className="w-12 h-12 bg-primary-700 mb-4"></div>
            <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">
              社群導向 Community
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              我們不只是培訓機構，更希望成為台灣中小企業資安社群的連結者。
              透過定期聚會、知識分享，讓企業彼此交流經驗，共同提升資安防護能力。
            </p>
          </div>
        </div>
      </Section>

      {/* Team Introduction */}
      <Section bgColor="bg-primary-50">
        <SectionHeader
          title="加入我們的講師團隊"
          subtitle="我們正在尋找志同道合的資安專家"
        />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              巨磐資安培訓學院的核心競爭力來自於我們優秀的講師團隊。
              如果您擁有資安專業背景，熱愛教學，希望將知識傳遞給更多人，
              我們誠摯邀請您加入我們的行列。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <div className="text-2xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    彈性工作時間
                  </h4>
                  <p className="text-gray-600">
                    依您的時間安排授課，兼職全職皆可
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    優渥講師費
                  </h4>
                  <p className="text-gray-600">
                    依照授課時數與內容深度提供具有競爭力的報酬
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    完整教材支援
                  </h4>
                  <p className="text-gray-600">
                    標準化課程教材，專注於教學品質
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    專業成長機會
                  </h4>
                  <p className="text-gray-600">與業界專家交流，擴展人脈網絡</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto border-2 border-primary-900 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 tracking-tight">
            想了解更多？
          </h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            無論您是想為企業尋找資安培訓方案，或是有意加入我們的講師團隊，
            都歡迎隨時與我們聯繫。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button variant="primary" to="/instructors">
              加入講師團隊
            </Button>
            <Button variant="outline" to="/courses">
              查看課程
            </Button>
            <Button variant="secondary" to="/contact">
              聯絡我們
            </Button>
          </div>
        </div>
      </Section>
    </div>
  </>
  );
}

export default About;
