import Layout from '../../components/Layout'
import ZoomableImage from '../../components/ZoomableImage'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>Liara | متغیرها - Environment Variables</title>
    </Head>

    <h1>متغیرها (Environment Variables)</h1>
    <p>
      هر پروژه‌ای ممکن است در محیط‌های مختلفی اجرا شود.
      برای مثال پروژه‌ی شما علاوه بر این که در حالت
      development
      روی کامپیوتر شما اجرا می‌شود،
      روی سرورهای لیارا هم قرار گرفته و در حالت
      production
      به اجرا در می‌آید.
      یک پروژه‌ی
      open-source
      ممکن است در صدها محیط مختلف توسط افراد مختلف اجرا شود.
    </p>

    <p>
      اگر چه که همه‌ی این محیط‌ها یک پروژه را اجرا می‌کنند، اما معمولا هر کدام از آن‌ها دارای متغیرهایی برای
      کانفیگ پروژه در آن محیط هستند.
      برای نمونه، پروژه‌ی شما در کامیپوترتان ممکن است به دیتابیس لوکال‌تان متصل شود
      اما روی سرورهای لیارا، انتظار دارید که به دیتابیس اصلی‌تان متصل شود.
    </p>

    <p>
      یکی از بهترین روش‌ها برای پیکربندی پروژه‌ها برای هر محیط، استفاده از
      Environment Variables
      ها است.
      <br/>
      ممکن است پروژه‌ی شما دارای یک فایل
      <span className="code">.env</span>
      جهت ذخیره‌ی متغیرها باشد، اما در لیارا نیازی به این فایل نیست و از بخش تنظیمات هر پروژه
      می‌توانید متغیرهای موردنظرتان را تعریف کنید.
    </p>

    <h3>دسترسی به متغیرها</h3>
    <p>
      با مراجعه به فهرست «پروژه‌ها»، روی پروژه‌ی مورد نظرتان کلیک کنید.
      <br/>
      سپس روی گزینه‌ی تنظیمات از فهرست سمت راست کلیک کنید تا وارد صفحه‌ی تنظیمات شوید.
      <br/>
      در این صفحه، بخش متغیرها را می‌توانید مشاهده کنید.
    </p>
    <ZoomableImage src="/static/envs-empty.png" alt="بخش متغیرها" />
    <p>
      با کلیک بر روی گزینه‌ی
      {' '}
      <b>افزودن متغیر جدید</b>
      {' '}
      یک سطر جدید با دو فیلد
      <span className="code">Key</span>
      و
      <span className="code">Value</span>
      ایجاد می‌شود که می‌توانید متغیر مد نظرتان را از طریق آنها تعریف نمایید.
    </p>
    <ZoomableImage src="/static/envs-full.png" alt="نمونه‌ای از متغیرها" />
  </Layout>
)