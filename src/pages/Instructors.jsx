import Button from "../components/Button";
import Section, { SectionHeader } from "../components/Section";

function Instructors() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-700 to-accent-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            加入我們的講師團隊
          </h1>
          <p className="text-xl md:text-2xl text-accent-100 max-w-3xl mx-auto">
            一起推廣資安教育，成為台灣中小企業的資安導師
          </p>
        </div>
      </section>

      {/* Recruitment Information */}
      <Section>
        <SectionHeader
          title="為什麼成為巨磐講師？"
          subtitle="彈性工作、穩定收入、專業成長，三者兼得的理想機會"
        />
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-lg shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">💰</span>
                  優渥的講師報酬
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">•</span>
                    <span>具競爭力報酬，依經驗與堂數調整</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">•</span>
                    <span>
                      <strong>依經驗調整</strong>
                      ，隨著授課經驗累積，報酬可逐步提升
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">•</span>
                    <span>
                      <strong>額外獎金：</strong>學員滿意度達 4.5 分以上額外獎勵
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">•</span>
                    <span>
                      <strong>交通補助：</strong>外縣市授課提供交通與住宿補助
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">📅</span>
                  彈性的工作安排
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">•</span>
                    <span>
                      <strong>自由排班：</strong>可自行決定可接課時間與授課頻率
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">•</span>
                    <span>
                      <strong>兼職全職：</strong>可彈性搭配正職工作
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">•</span>
                    <span>
                      <strong>線上線下：</strong>提供實體與線上課程選擇
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2 text-xl">•</span>
                    <span>
                      <strong>無最低時數：</strong>沒有每月授課時數限制
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                標準化教材
              </h3>
              <p className="text-gray-600 text-center">
                提供完整的課程教材、簡報、案例，講師只需專注於教學品質與互動
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                專業培訓支援
              </h3>
              <p className="text-gray-600 text-center">
                提供講師培訓、教學技巧工作坊，持續提升授課能力
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                業界人脈拓展
              </h3>
              <p className="text-gray-600 text-center">
                接觸各產業企業客戶，建立專業形象，拓展職涯發展機會
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Training Process */}
      <Section bgColor="bg-gray-50">
        <SectionHeader
          title="講師培訓流程"
          subtitle="4 步驟成為認證講師，從申請到正式授課約 3-4 週"
        />
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                1
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  申請與初步篩選
                </h3>
                <p className="text-gray-700 mb-4">
                  填寫線上申請表，提供個人履歷、資安相關證照或經歷。 我們會透過
                  LinkedIn 或書面資料進行初步審核。
                </p>
                <div className="bg-primary-50 p-4 rounded-md">
                  <p className="text-sm text-gray-700">
                    <strong>基本要求：</strong>具備資安相關證照（如
                    CEH、CISSP、ISO 27001 LA） 或至少 3
                    年資安實務經驗，有教學或簡報經驗者優先。
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                2
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  試教與面試
                </h3>
                <p className="text-gray-700 mb-4">
                  通過初審後，將安排 15-20
                  分鐘的試教。您需要從我們提供的主題中選一個，
                  模擬對企業員工授課的情境。我們會評估您的表達能力、互動技巧與專業度。
                </p>
                <div className="bg-secondary-50 p-4 rounded-md">
                  <p className="text-sm text-gray-700">
                    <strong>評估重點：</strong>
                    清晰的表達、案例運用、互動設計、時間掌控。
                    不需要華麗的簡報，重點是能否讓非資安背景的學員聽懂。
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-accent-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                3
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  線上培訓課程（1-2 週）
                </h3>
                <p className="text-gray-700 mb-4">
                  通過試教後，需完成我們的線上講師培訓課程，
                  內容包括教學技巧、教材使用、學員管理、突發狀況應對等。
                  課程採線上影片 + 作業的形式，可依自己的時間安排學習。
                </p>
                <div className="bg-accent-50 p-4 rounded-md">
                  <p className="text-sm text-gray-700">
                    <strong>培訓內容：</strong>
                    成人學習理論、互動技巧、案例帶領、 Q&A
                    應對、教材使用說明、平台操作教學。
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-danger-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                4
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  認證考核與正式授課
                </h3>
                <p className="text-gray-700 mb-4">
                  完成培訓課程後，需通過一次正式的模擬授課考核（約 30 分鐘）。
                  通過後即可成為認證講師，開始透過 App 接課。
                  首次授課會有資深講師陪同觀課，給予建議與回饋。
                </p>
                <div className="bg-danger-50 p-4 rounded-md">
                  <p className="text-sm text-gray-700">
                    <strong>持續支援：</strong>加入講師專屬社群，
                    定期舉辦交流會，提供教學疑難排解、教材更新通知、新課程開發機會。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Join */}
      <Section>
        <SectionHeader
          title="成為講師的三大價值"
          subtitle="不只是一份兼職，更是個人品牌與影響力的展現"
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 rounded-lg shadow-lg">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              創造社會影響力
            </h3>
            <p className="text-gray-700 leading-relaxed">
              協助台灣中小企業提升資安防護能力，讓您的專業知識發揮更大的價值。
              每一場課程都可能幫助企業避免數百萬的損失，這份成就感無可取代。
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 p-8 rounded-lg shadow-lg">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              拓展職涯人脈
            </h3>
            <p className="text-gray-700 leading-relaxed">
              接觸各產業的企業主與資安負責人，建立廣泛的業界人脈。
              許多講師透過授課獲得顧問案、工作機會，或成為企業長期合作夥伴。
            </p>
          </div>
          <div className="bg-gradient-to-br from-accent-100 to-accent-200 p-8 rounded-lg shadow-lg">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              穩定的額外收入
            </h3>
            <p className="text-gray-700 leading-relaxed">
              每月授課 4-8 場，即可獲得 NT$20,000 - 80,000 的穩定收入。
              適合想增加收入、發展斜槓職涯，或準備創業的資安專業人士。
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-gradient-to-r from-accent-700 to-danger-700">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            準備好成為巨磐講師了嗎？
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            立即提交申請，或下載培訓手冊了解更多細節
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" to="/contact" className="text-lg">
              申請講師
            </Button>
          </div>
          <p className="text-sm text-accent-200 mt-6">
            有任何疑問？歡迎透過聯絡表單或直接來電洽詢
          </p>
        </div>
      </Section>
    </div>
  );
}

export default Instructors;
