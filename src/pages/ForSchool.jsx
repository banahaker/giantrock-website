import { useState } from "react";
import Button from "../components/Button";
import Section, { SectionHeader } from "../components/Section";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";

function ForSchool() {
  const [activeTab, setActiveTab] = useState("basic"); // 'basic' or 'advanced'

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "學校資安合規服務",
    description:
      "專為臺灣教育體系打造的校園資安合規與行政減壓方案，從 D/E 級輕量合規到 C 級深度治理。",
    provider: {
      "@type": "Organization",
      name: "巨磐資安培訓學院",
    },
    areaServed: {
      "@type": "Country",
      name: "TW",
    },
    serviceType: "資安合規與培訓服務",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: ["school", "university"],
    },
  };

  const painPoints = [
    {
      icon: "😩",
      title: "兼任資訊組長分身乏術",
      description:
        "平時要教課、修電腦，還要應付每年法定的資安受訓時數與一堆計畫書。",
    },
    {
      icon: "📝",
      title: "最怕 SPM 系統與紙本報告",
      description:
        "活動辦完了，卻不知道怎麼生出符合教育部格式的「成果報告書」與「簽到表」。",
    },
    {
      icon: "🚨",
      title: "擔心稽核被開缺失",
      description:
        "不知如何設定社交工程演練、不敢寫 BCP 災難復原腳本，怕實地稽核過不了關。",
    },
    {
      icon: "🤝",
      title: "委外廠商難以管理",
      description:
        "發包系統不知道怎麼訂定資安條款，擔心廠商誤用大陸品牌（如 TP-Link、海康威視）遭到連坐開罰。",
    },
  ];

  const basicModules = [
    {
      icon: "📦",
      title: "模組 1：法定通識時數 ╳ 文件生成服務",
      description: "全校教職員 3 小時通識、資訊人員 6 小時訓練，我們一次包辦！",
      highlight:
        "獨家加碼：課程結束後，由本公司專屬行政團隊為您整理「教育訓練簽到表」、「滿意度問卷」，並直接產出 SPM 系統應備的「成果報告書」代編模板，直接複製貼上即可申報。",
    },
    {
      icon: "🎣",
      title: "模組 2：客製化社交工程演練 ╳ 補救教學",
      description:
        "告別死板的測試！我們提供符合校園情境（如偽裝成教育局公文、研習通知）的釣魚信件演練。",
      highlight:
        "獨家加碼：演練結束後直接為您產出完整的「合規檢討報告」，並針對未通過點閱的教職員提供對應的「補救教材」，讓您面對縣市教網中心查核時輕鬆過關。",
    },
    {
      icon: "🛡️",
      title: "模組 3：輕量級委外安全 ╳ 採購防雷指南",
      description: "學校發包網頁或系統不知道怎麼訂資安條款？",
      highlight:
        "獨家加碼：提供「教育部公版資安委外合約條款範本」顧問諮詢，教您如何稽核廠商、避開大陸禁用廠牌清單，大幅降低學校的連帶責任風險。",
    },
  ];

  const advancedModules = [
    {
      icon: "📊",
      title: "模組 1：ISMS 與內部稽核一條龍輔導",
      description:
        "針對 C 級學校兩年一次的內部資安稽核要求，我們提供貼近教育現場的 ISO 27001 實務輔導。",
      highlight:
        "專人代勞：我們的顧問團隊及行政專員，將協助貴校進行最耗時的「盤點資產清冊」與「風險評鑑表撰寫」，將繁瑣的文書作業降至最低。",
    },
    {
      icon: "🔥",
      title: "模組 2：業務持續運作演練 (BCP) 實戰計畫",
      description: "遇到勒索軟體或系統癱瘓怎麼辦？我們不只紙上談兵！",
      highlight:
        "專人代勞：顧問手把手引導貴校訂定 RTO (復原時間) / RPO (復原點)，規劃兵棋推演與災難復原演練腳本。並由行政文書團隊協助撰寫厚重的「演練計畫書與結案報告」，確保 100% 吻合教育部實地查核標準。",
    },
  ];

  const advantages = [
    {
      icon: "📝",
      title: "買專業服務，送行政文書",
      description:
        "我們深知學校老師最缺的是「時間」。選擇我們的模組，背後皆附帶「行政專員支援」，幫您把計畫書、簽到表、成果報告全部準備妥當。",
    },
    {
      icon: "🎯",
      title: "100% 緊扣教育部稽核檢核表",
      description:
        "我們的課程與演練腳本，完全依照現行《資通安全管理法》與《教育體系資通安全實地稽核項目》設計。別人教理論，我們教您怎麼拿滿分。",
    },
    {
      icon: "🏫",
      title: "懂技術，更懂教育現場",
      description:
        "從校長、行政主管到一般老師，我們針對不同職務設計聽得懂、用得上的情境式內容，有效降低「人為資安破口」。",
    },
  ];

  return (
    <>
      <SEO
        title="學校專區"
        description="專為臺灣教育體系打造的校園資安合規與行政減壓方案。從 D/E 級輕量合規到 C 級深度治理，幫資訊組長省下時間，輕鬆應對教育部實地稽核與 SPM 系統申報！"
        keywords="學校資安,教育機構資安,資安合規,SPM系統,教育部稽核,資訊組長,ISMS,BCP演練,社交工程演練,資安培訓"
        canonical="/for-school"
      />
      <StructuredData data={serviceSchema} />
      <div>
        {/* Hero Banner */}
        <section
          className="relative py-20 md:py-28 border-b-4 border-secondary-500"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.9)), url('/classroom.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
              專為臺灣教育體系打造
              <br />
              <span className="text-secondary-400">
                校園資安合規與行政減壓方案
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              從 D/E 級輕量合規到 C
              級深度治理。我們不只提供專業培訓，更包辦繁瑣的行政文書，
              幫資訊組長省下時間，輕鬆應對教育部實地稽核與 SPM 系統申報！
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button variant="accent" to="/contact" className="px-8">
                立即諮詢
              </Button>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <Section bgColor="bg-gray-50">
          <SectionHeader
            title="學校資安業務繁雜，您是否也面臨這些挑戰？"
            subtitle=""
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 border-l-4 border-secondary-500 hover:border-accent-500 transition-colors duration-200"
              >
                <div className="flex items-start">
                  <span className="text-3xl mr-4">{point.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-primary-900 mb-2 tracking-tight">
                      {point.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-xl font-semibold text-primary-900">
              👉 把資安合規的煩惱交給我們，您專注於教育本業！
            </p>
          </div>
        </Section>

        {/* Solutions Section with Tabs */}
        <Section>
          <SectionHeader
            title="核心解決方案"
            subtitle="根據貴校等級，選擇最適合的資安合規方案"
          />

          {/* Tab Buttons */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 p-1 rounded-none">
              <button
                onClick={() => setActiveTab("basic")}
                className={`px-6 py-3 font-semibold text-sm transition-all duration-200 ${
                  activeTab === "basic"
                    ? "bg-secondary-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                🟢 基礎防護與合規包
                <span className="block text-xs font-normal mt-1 opacity-80">
                  For D、E 級學校
                </span>
              </button>
              <button
                onClick={() => setActiveTab("advanced")}
                className={`px-6 py-3 font-semibold text-sm transition-all duration-200 ${
                  activeTab === "advanced"
                    ? "bg-accent-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                🟠 進階治理與賦能包
                <span className="block text-xs font-normal mt-1 opacity-80">
                  For C 級學校
                </span>
              </button>
            </div>
          </div>

          {/* Basic Tab Content */}
          {activeTab === "basic" && (
            <div className="max-w-5xl mx-auto">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
                <p className="text-sm text-gray-700">
                  <strong className="text-green-700">目標客群：</strong>
                  公私立國中、國小、高中（無專職資安人員、由一般教師兼任資訊組長）
                  <br />
                  <strong className="text-green-700">核心訴求：</strong>
                  輕量化合規 ｜ 行政大減壓 ｜ 無痛過稽核
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {basicModules.map((module, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 border-2 border-gray-200 hover:border-secondary-500 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <span className="text-4xl mr-4">{module.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">
                          {module.title}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {module.description}
                        </p>
                        <div className="bg-secondary-50 border-l-4 border-secondary-500 p-4">
                          <p className="text-sm text-gray-700">
                            <span className="text-secondary-600 font-semibold">
                              ✨ {module.highlight.split("：")[0]}：
                            </span>
                            {module.highlight.split("：")[1]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Advanced Tab Content */}
          {activeTab === "advanced" && (
            <div className="max-w-5xl mx-auto">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
                <p className="text-sm text-gray-700">
                  <strong className="text-orange-700">目標客群：</strong>
                  國立大學、縣市教網中心、大型私立中學（有獨立資訊室、有專職資安人員、面臨教育部高度監管）
                  <br />
                  <strong className="text-orange-700">核心訴求：</strong>
                  落實 ISMS ｜ 建立防禦韌性 ｜ 完美應對實地實機查核
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {advancedModules.map((module, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 border-2 border-gray-200 hover:border-accent-500 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <span className="text-4xl mr-4">{module.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">
                          {module.title}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {module.description}
                        </p>
                        <div className="bg-accent-50 border-l-4 border-accent-500 p-4">
                          <p className="text-sm text-gray-700">
                            <span className="text-accent-600 font-semibold">
                              ✨ {module.highlight.split("：")[0]}：
                            </span>
                            {module.highlight.split("：")[1]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Section>

        {/* Why Choose Us Section */}
        <Section bgColor="bg-gray-50">
          <SectionHeader
            title="超越傳統培訓，我們是您校園的「資安守護管家」"
            subtitle=""
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 border-l-4 border-secondary-500 hover:border-accent-500 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section bgColor="bg-primary-900">
          <div className="text-center text-white border-4 border-secondary-500 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              準備好迎接下一次的資安申報與稽核了嗎？
            </h2>
            <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              別等到 SPM 系統快關閉、或收到實地稽核通知才開始準備。
              現在就與我們聯繫，量身打造符合貴校等級的年度資安方案！
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button variant="accent" to="/contact" className="px-8">
                立即聯繫我們
              </Button>
              <Button variant="outlineWhite" to="/courses" className="px-8">
                瀏覽其他課程
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default ForSchool;
