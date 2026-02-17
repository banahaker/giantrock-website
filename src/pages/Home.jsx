import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import Section, { SectionHeader } from "../components/Section";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";

function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "巨磐資安培訓學院",
    alternateName: "GiantRock Cybersecurity Academy",
    legalName: "拉資科科技有限公司",
    url: "https://www.giantrocktw.com",
    logo: "https://www.giantrocktw.com/logo_blue_full.png",
    description:
      "專為台灣中小企業打造的實戰型資安培訓學院。提供網路釣魚防護、勒索軟體應變、供應鏈資安等課程。",
    email: "service@giantrocktw.com",
    areaServed: {
      "@type": "Country",
      name: "TW",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "service@giantrocktw.com",
      contactType: "customer service",
      areaServed: "TW",
      availableLanguage: ["zh-TW", "zh-Hant"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };

  return (
    <>
      <SEO
        title="保護您的企業，從資安開始"
        description="專為台灣傳統製造業打造的實戰型資安培訓。500+企業客戶，30%降低資安事件，10,000+培訓人次。提供網路釣魚防護、勒索軟體應變、供應鏈資安管理等課程。"
        keywords="資安培訓,企業資安,網路釣魚,勒索軟體,資安教育,製造業資安,資安課程,資安意識,供應鏈資安,個資保護"
        canonical="/"
      />
      <StructuredData data={organizationSchema} />
      <div>
        {/* Hero Banner */}
        <section className="relative bg-white text-primary-900 py-12 md:py-16 border-b-4 border-secondary-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Logo */}
              <div className="mb-6 flex justify-center">
                <div className="inline-block">
                  <img
                    src="/logo_blue_full.png"
                    alt="巨磐資安培訓學院"
                    className="h-14 md:h-20 lg:h-36 w-auto"
                  />
                </div>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-900 tracking-tight">
                保護您的企業，從資安開始！
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                專為台灣傳統企業打造的實戰型資安培訓課程
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button variant="accent" to="/courses" className="px-8">
                  查看所有課程
                </Button>
                <Button variant="outline" to="/contact" className="px-8">
                  聯絡我們
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <Section bgColor="bg-gray-50">
          <div className="text-center max-w-4xl mx-auto">
            <SectionHeader
              title="專注台灣中小企業的資安夥伴"
              subtitle="巨磐資安培訓學院深耕台灣中小企業市場，理解台灣中小企業在數位轉型過程中面臨的資安挑戰。我們提供實戰導向、接地氣的資安培訓，幫助企業建立堅實的資安防護能力。"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-5 border-2 border-gray-200">
                <div className="text-3xl font-bold text-secondary-600 mb-1">
                  500+
                </div>
                <div className="text-gray-700 text-sm font-medium">
                  企業客戶
                </div>
              </div>
              <div className="bg-white p-5 border-2 border-gray-200">
                <div className="text-3xl font-bold text-secondary-600 mb-1">
                  30%
                </div>
                <div className="text-gray-700 text-sm font-medium">
                  平均降低資安事件
                </div>
              </div>
              <div className="bg-white p-5 border-2 border-gray-200">
                <div className="text-3xl font-bold text-secondary-600 mb-1">
                  10,000+
                </div>
                <div className="text-gray-700 text-sm font-medium">
                  培訓人次
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Featured Courses Preview */}
        <Section>
          <SectionHeader
            title="精選課程"
            subtitle="針對台灣中小企業最常見的資安威脅，設計實用的培訓課程"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              title="基礎網路釣魚與員工資安意識"
              description="教導員工識別網路釣魚郵件與詐騙手法，建立企業第一道人為防線。"
              price="NT$68,888 ~ NT$108,888/場"
              duration="4-8 小時"
              targetAudience="全體員工"
              outcomes={[
                "90% 員工能正確識別釣魚郵件",
                "了解常見社交工程手法",
                "建立資安意識文化",
              ]}
            />
            <CourseCard
              title="勒索軟體防護與資料備份策略"
              description="從預防到應變，全方位建立勒索軟體防護機制，保護企業核心資料。"
              price="NT$128,888 - 168,888/場"
              duration="6-8 小時"
              targetAudience="IT 管理人員"
              outcomes={[
                "建立完整備份與還原機制",
                "快速應變勒索軟體攻擊",
                "降低 80% 資料遺失風險",
              ]}
            />
            <CourseCard
              title="供應鏈資安與合規管理"
              description="協助企業符合客戶資安要求，強化供應鏈安全管理，取得更多訂單機會。"
              price="依企業規模與需求報價"
              duration="8 小時"
              targetAudience="採購與法務部門"
              outcomes={[
                "了解 ISO 27001 與個資法要求",
                "建立供應鏈資安條款",
                "通過客戶資安稽核",
              ]}
            />
          </div>
          <div className="text-center mt-10">
            <Button variant="primary" to="/courses">
              查看所有課程
            </Button>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section bgColor="bg-gray-50">
          <SectionHeader
            title="為什麼選擇巨磐資安培訓？"
            subtitle="我們不只是教理論，更重視實戰應用與在地化服務"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 border-l-4 border-secondary-500 hover:border-accent-500 transition-colors duration-200">
              <div className="w-10 h-10 bg-secondary-500 mb-3"></div>
              <h3 className="text-lg font-bold text-primary-900 mb-2 tracking-tight">
                實戰導向培訓
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                以真實案例為基礎，讓學員學以致用，立即提升企業資安防護能力。
              </p>
            </div>
            <div className="bg-white p-5 border-l-4 border-secondary-500 hover:border-accent-500 transition-colors duration-200">
              <div className="w-10 h-10 bg-accent-500 mb-3"></div>
              <h3 className="text-lg font-bold text-primary-900 mb-2 tracking-tight">
                政府補助支援
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                極力協助申請政府資安培訓補助，降低企業培訓成本，讓更多企業受益。
              </p>
            </div>
            <div className="bg-white p-5 border-l-4 border-secondary-500 hover:border-accent-500 transition-colors duration-200">
              <div className="w-10 h-10 bg-primary-600 mb-3"></div>
              <h3 className="text-lg font-bold text-primary-900 mb-2 tracking-tight">
                彈性培訓方案
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                提供線上、線下、內訓多種方案，配合企業需求彈性安排課程時間與內容。
              </p>
            </div>
            <div className="bg-white p-5 border-l-4 border-secondary-500 hover:border-accent-500 transition-colors duration-200">
              <div className="w-10 h-10 bg-secondary-700 mb-3"></div>
              <h3 className="text-lg font-bold text-primary-900 mb-2 tracking-tight">
                認證專業講師
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                所有講師皆具備資安專業認證與產業實務經驗，提供高品質培訓服務。
              </p>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section>
          <SectionHeader
            title="客戶見證"
            subtitle="聽聽企業主與資安負責人怎麼說"
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 border-l-4 border-secondary-500 border border-gray-200">
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                參加巨磐的資安培訓後，我們公司的員工對網路釣魚郵件的警覺性大幅提升。
                上個月成功攔截了三次疑似釣魚攻擊，避免了可能的資料外洩風險。
                培訓內容實用且貼近我們製造業的實際情況，非常推薦！
              </p>
              <div className="border-t-2 border-gray-200 pt-3">
                <p className="font-semibold text-primary-900 text-sm">王經理</p>
                <p className="text-xs text-gray-600">
                  某精密機械製造公司 IT 主管
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section bgColor="bg-primary-900">
          <div className="text-center text-white border-4 border-secondary-500 p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              準備好提升企業資安防護能力了嗎？
            </h2>
            <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              立即聯絡我們，取得免費課程諮詢與企業資安健檢服務
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button variant="accent" to="/contact">
                立即諮詢
              </Button>
              <Button variant="outlineWhite" to="/courses">
                瀏覽課程
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Home;
