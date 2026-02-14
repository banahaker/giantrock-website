import { useState } from "react";
import Button from "../components/Button";
import Section, { SectionHeader } from "../components/Section";

// Google Form URL
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKrY8Keb2ckH1R-5DAZpGTqp9fJgDbWcePstVo4fTbDTKFUg/formResponse";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    const searchParams = new URLSearchParams();
    formData.forEach((value, key) => {
      searchParams.append(key, value);
    });

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: searchParams,
        mode: "no-cors",
      });
      alert("感謝您的詢問！我們將盡快與您聯繫。");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("提交失敗，請稍後再試或直接發送郵件至 info@giantrock.com.tw");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-12 md:py-16 border-b-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            聯絡我們
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            開始您的資安之旅 — 我們隨時準備為您服務
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <Section bgColor="bg-gray-50">
        <SectionHeader title="聯絡資訊" subtitle="歡迎透過以下方式與我們聯繫" />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="bg-white p-6 border-l-4 border-secondary-500 hover:border-accent-500 transition-colors duration-200">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-accent-500 mr-3"></div>
                <div>
                  <h3 className="text-lg font-bold text-primary-900 tracking-tight">
                    電子郵件
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 mb-2 text-sm">
                我們將在 24 小時內回覆您的來信
              </p>
              <p className="text-xl font-semibold text-secondary-600 break-all">
                info@giantrock.com.tw
              </p>
              <p className="text-xs text-gray-600 mt-2">
                ※ 請在主旨註明「課程報名」或「講師申請」以加快處理速度
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section>
        <SectionHeader
          title="線上詢問表單"
          subtitle="填寫以下表單，我們將盡快與您聯繫"
        />
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 border-2 border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name - entry.1463598971 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-primary-900 mb-2 tracking-wide"
                >
                  姓名 <span className="text-red-600">∗</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="entry.1463598971"
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-300 focus:border-secondary-500 outline-none transition-all text-sm"
                  placeholder="請輸入您的姓名"
                />
              </div>

              {/* Company - entry.214147896 */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-primary-900 mb-2 tracking-wide"
                >
                  公司名稱
                </label>
                <input
                  type="text"
                  id="company"
                  name="entry.214147896"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 focus:border-secondary-500 outline-none transition-all text-sm"
                  placeholder="請輸入公司名稱（選填）"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Email - entry.493810458 */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary-900 mb-2 tracking-wide"
                >
                  電子郵件 <span className="text-red-600">∗</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="entry.493810458"
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-300 focus:border-secondary-500 outline-none transition-all text-sm"
                  placeholder="example@company.com"
                />
              </div>

              {/* Inquiry Type - entry.952887416 */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-semibold text-primary-900 mb-2 tracking-wide"
                >
                  詢問類型 <span className="text-red-600">∗</span>
                </label>
                <select
                  id="inquiryType"
                  name="entry.952887416"
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-300 focus:border-secondary-500 outline-none transition-all bg-white text-sm"
                >
                  <option value="課程報名">課程報名</option>
                  <option value="報價詢問">報價詢問</option>
                  <option value="免費資安諮詢">免費資安諮詢</option>
                  <option value="講師申請">講師申請</option>
                </select>
              </div>
            </div>

            {/* Address - entry.1500457742 */}
            <div className="mb-6">
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-primary-900 mb-2 tracking-wide"
              >
                聯絡地址
              </label>
              <input
                type="text"
                id="address"
                name="entry.1500457742"
                className="w-full px-4 py-2.5 border-2 border-gray-300 focus:border-secondary-500 outline-none transition-all text-sm"
                placeholder="請輸入聯絡地址（選填）"
              />
            </div>

            {/* Message - Add your entry ID for message field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-primary-900 mb-2 tracking-wide"
              >
                詢問內容 <span className="text-red-600">∗</span>
              </label>
              <textarea
                id="message"
                name="entry.1334403055"
                required
                rows="6"
                className="w-full px-4 py-2.5 border-2 border-gray-300 focus:border-secondary-500 outline-none transition-all resize-none text-sm"
                placeholder="請詳細說明您的需求，例如：&#10;• 希望了解的課程內容&#10;• 預計培訓人數&#10;• 期望的上課時間&#10;• 其他特殊需求"
              ></textarea>
            </div>

            {/* Privacy Notice */}
            <div className="mb-6 p-4 bg-gray-50 border-l-4 border-primary-500">
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-primary-900">個資保護聲明：</strong>
                您所提供的個人資料將僅用於本次詢問之聯繫與服務，
                我們遵循個人資料保護法規定，不會將您的資料提供給第三方或作為其他用途。
                詳細隱私政策請參閱我們的網站說明。
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                className="px-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "送出中..." : "送出詢問"}
              </Button>
            </div>
          </form>
        </div>
      </Section>

      {/* Additional Info */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 tracking-tight">
            常見問題
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-white p-5 border-l-4 border-secondary-500 border border-gray-200">
              <h3 className="font-bold text-primary-900 mb-2 text-sm tracking-tight">
                Q: 最少需要多少人才能開課？
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                A: 企業內訓最少 10 人即可開課， 公開班則視報名狀況而定。
                如果貴公司人數不足，我們也可以協助媒合其他企業一起上課。
              </p>
            </div>
            <div className="bg-white p-5 border-l-4 border-secondary-500 border border-gray-200">
              <h3 className="font-bold text-primary-900 mb-2 text-sm tracking-tight">
                Q: 講師申請需要什麼資格？
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                A: 基本要求為具備資安相關證照（如 CEH、CISSP） 或至少 3
                年資安實務經驗。有教學經驗者優先，
                但我們也歡迎新手講師，會提供完整培訓。
              </p>
            </div>
            <div className="bg-white p-5 border-l-4 border-secondary-500 border border-gray-200">
              <h3 className="font-bold text-primary-900 mb-2 text-sm tracking-tight">
                Q: 課程可以客製化內容嗎？
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                A: 當然可以！我們提供客製化企業內訓服務，
                可根據貴公司的產業特性、資安現況、
                以及特定需求來調整課程內容。歡迎來電討論。
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
