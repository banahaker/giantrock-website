import Button from "../components/Button";
import Section, { SectionHeader } from "../components/Section";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";

function Courses() {
  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Course",
        position: 1,
        name: "基礎網路釣魚與員工資安意識",
        description:
          "教導員工識別網路釣魚郵件與詐騙手法，建立企業第一道人為防線。",
        provider: {
          "@type": "Organization",
          name: "巨磐資安培訓學院",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "TWD",
          price: "68888-108888",
        },
      },
      {
        "@type": "Course",
        position: 2,
        name: "勒索軟體防護與資料備份策略",
        description:
          "從預防到應變，全方位建立勒索軟體防護機制，保護企業核心資料。",
        provider: {
          "@type": "Organization",
          name: "巨磐資安培訓學院",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "TWD",
          price: "5000-15000",
        },
      },
      {
        "@type": "Course",
        position: 3,
        name: "供應鏈資安與合規管理",
        description:
          "協助企業符合客戶資安要求，強化供應鏈安全管理，取得更多訂單機會。",
        provider: {
          "@type": "Organization",
          name: "巨磐資安培訓學院",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "TWD",
          price: "5000-15000",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="資安培訓課程"
        description="專為台灣中小企業設計的實戰型資安課程。包含基礎網路釣魚防護、勒索軟體應變與備份策略、供應鏈資安與合規管理等培訓。可申請政府補助，提供內訓服務。"
        keywords="資安課程,資安培訓,網路釣魚防護,勒索軟體,供應鏈資安,ISO 27001,個資法,企業內訓,資安認證,政府培訓補助"
        canonical="/courses"
      />
      <StructuredData data={coursesSchema} />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-800 to-secondary-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              我們的資安培訓課程
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              量身訂製給台灣傳產 SMEs 的實戰型資安培訓
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <Section bgColor="bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              我們的課程專為台灣中小型傳統製造業設計，聚焦最常見的資安威脅與實戰應對策略。
              所有課程均可申請政府補助，並提供彈性的培訓方案。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  💰
                </div>
                <div className="font-semibold text-gray-900 mb-1">課程費用</div>
                <div className="text-gray-600">
                  價格範圍：NT$5,000-15,000/人）
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  ⏱️
                </div>
                <div className="font-semibold text-gray-900 mb-1">培訓時長</div>
                <div className="text-gray-600">4-8 小時彈性安排</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  🎓
                </div>
                <div className="font-semibold text-gray-900 mb-1">證書認證</div>
                <div className="text-gray-600">完訓證書與測驗</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Course 1: Phishing and Security Awareness */}
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-primary-600">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-4">🎣</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      基礎網路釣魚與員工資安意識
                    </h2>
                    <p className="text-lg text-gray-600">
                      教導員工識別網路釣魚郵件與詐騙手法，建立企業第一道人為防線
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    課程簡介
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    根據統計，超過 90%
                    的資安事件起因於「人」的疏失，而非技術漏洞。
                    網路釣魚（Phishing）是攻擊者最常使用的手法，透過偽造的郵件、簡訊或網站，
                    誘騙員工點擊惡意連結或洩露帳號密碼。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    本課程從真實案例出發，教導員工如何識別釣魚郵件、可疑連結，
                    以及在日常工作中應該注意的資安習慣。透過互動式演練與測驗，
                    讓每位員工都能成為企業的第一道防線。
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    培訓方案
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        方案A：半日工作坊（推薦）
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>
                            <strong>時長：</strong>4 小時
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>
                            <strong>費用：</strong>
                            NT$68,888 ~ NT$108,888/場（依實際報價調整）
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>
                            <strong>形式：</strong>實體內訓
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>
                            <strong>人數：</strong>10-30 人
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>
                            <strong>內容：</strong>講師授課 + 真實案例討論 +
                            模擬演練
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        方案B：線上自學課程
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>時長：</strong>2 小時影片 + 測驗
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>費用：</strong>
                            NT$3,000 ~ 15,000/人（團報優惠，依規模調整）
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>形式：</strong>線上平台不限次數觀看
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>適合：</strong>彈性時間、分散地點的員工
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>內容：</strong>影片教學 + 線上測驗 +
                            完訓證書
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    學習成果
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        90% 員工能正確識別釣魚郵件
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        了解社交工程常見手法
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        建立良好的密碼管理習慣
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        企業資安意識文化提升
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    適合對象
                  </h3>
                  <p className="text-gray-700">
                    <strong>全體員工</strong>
                    （特別推薦行政、業務、採購等常接觸郵件的人員）
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" to="/contact" className="flex-1">
                    報名課程
                  </Button>
                  <Button variant="outline" className="flex-1">
                    免費下載課程大綱 PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Course 2: Ransomware Protection */}
        <Section bgColor="bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-danger-600">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-4">🔒</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      勒索軟體防護與資料備份策略
                    </h2>
                    <p className="text-lg text-gray-600">
                      從預防到應變，全方位建立勒索軟體防護機制，保護企業核心資料
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    課程簡介
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    勒索軟體（Ransomware）已成為製造業最大的資安威脅之一。
                    一旦中招，企業的重要檔案將被加密，攻擊者要求支付贖金才願意解鎖。
                    對製造業而言，生產資料、客戶訂單、設計圖檔的遺失，可能造成數百萬甚至上千萬的損失。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    本課程教導 IT
                    人員如何建立完整的防護機制，包括備份策略、網路隔離、
                    權限管理，以及當不幸中招時的應變流程。透過模擬演練，
                    讓學員能在最短時間內恢復營運，將損失降到最低。
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    培訓方案
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-danger-50 to-danger-100 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        方案A：全日內訓（推薦）
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-danger-600 mr-2">•</span>
                          <span>
                            <strong>時長：</strong>8 小時
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-danger-600 mr-2">•</span>
                          <span>
                            <strong>費用：</strong>
                            NT$128,888 - 168,888/場（依實際報價調整）
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-danger-600 mr-2">•</span>
                          <span>
                            <strong>形式：</strong>實體內訓 + 實機演練
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-danger-600 mr-2">•</span>
                          <span>
                            <strong>人數：</strong>5-15 人
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-danger-600 mr-2">•</span>
                          <span>
                            <strong>內容：</strong>防護策略 + 備份實作 +
                            應變演練 + 顧問諮詢
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        方案B：訂閱式支援
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span>
                            <strong>費用：</strong>
                            NT$50,000 ~ 100,000/月
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span>
                            <strong>服務：</strong>初次培訓 + 每季複訓 +
                            緊急支援
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span>
                            <strong>適合：</strong>希望長期維護資安能力的企業
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span>
                            <strong>內容：</strong>備份檢查 + 演練 +
                            技術支援熱線
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    學習成果
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        建立完整的 3-2-1 備份策略
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        遭受攻擊時可在 4 小時內恢復
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        降低 80% 資料永久遺失風險
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        節省超過百萬的潛在損失
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    適合對象
                  </h3>
                  <p className="text-gray-700">
                    <strong>IT 管理人員、系統管理員、資訊主管</strong>
                    （負責企業伺服器與資料管理的人員）
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" to="/contact" className="flex-1">
                    報名課程
                  </Button>
                  <Button variant="outline" className="flex-1">
                    免費下載課程大綱 PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Course 3: Supply Chain Security */}
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-secondary-600">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-4">🔗</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      供應鏈資安與合規管理
                    </h2>
                    <p className="text-lg text-gray-600">
                      協助企業符合客戶資安要求，強化供應鏈安全管理，取得更多訂單機會
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    課程簡介
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    近年來，越來越多大型企業要求供應商必須符合特定的資安標準，
                    例如 ISO 27001
                    認證、個資法遵循、資安稽核等。對於傳統製造業而言，
                    這些要求往往讓人摸不著頭緒，甚至因為無法符合而失去訂單機會。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    本課程從實務角度出發，教導採購、法務、品保等部門人員，
                    如何理解客戶的資安要求、建立供應鏈安全條款、準備稽核文件，
                    以及與客戶溝通資安議題。透過真實的合約範例與案例分析，
                    讓學員能夠自信地面對客戶的資安要求。
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    培訓方案
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        方案A：模組化課程（推薦）
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>時長：</strong>8 小時（可分 2 次上課）
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>費用：</strong>
                            依企業規模與需求報價，客製化課程內容及服務
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>形式：</strong>實體內訓或線上直播
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>人數：</strong>10-20 人
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span>
                            <strong>內容：</strong>法規解讀 + 合約範例 +
                            稽核準備 + Q&A
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        方案B：客製化診斷服務
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>
                            <strong>費用：</strong>
                            依企業規模與需求報價，客製化課程內容及服務
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>
                            <strong>服務：</strong>現況診斷 + 客製培訓 +
                            文件協助
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>
                            <strong>適合：</strong>準備 ISO 27001
                            認證或面臨客戶稽核的企業
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>
                            <strong>內容：</strong>缺口分析 + 改善建議 +
                            文件範本 + 模擬稽核
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    學習成果
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        理解 ISO 27001 與個資法基本要求
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        建立標準化的供應鏈資安條款
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        順利通過客戶資安稽核
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">✓</span>
                      <span className="text-gray-700">
                        提升企業形象與競爭力
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    適合對象
                  </h3>
                  <p className="text-gray-700">
                    <strong>採購、法務、品保、業務部門主管與人員</strong>
                    （負責與客戶溝通合約與稽核的人員）
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" to="/contact" className="flex-1">
                    報名課程
                  </Button>
                  <Button variant="outline" className="flex-1">
                    免費下載課程大綱 PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section bgColor="bg-gradient-to-r from-primary-700 to-secondary-700">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              立即開始您的資安培訓之旅
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              無論您需要哪一種課程，我們都能為您量身打造最適合的培訓方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="accent" to="/contact" className="text-lg">
                立即諮詢
              </Button>
              <Button variant="outlineWhite" to="/about" className="text-lg">
                了解更多
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Courses;
