import type { BrewingMethod, BlogPost, CoffeeVariety, CoffeeTip, RoastLevel, WaterQualityTopic } from './types';

export const BREWING_METHODS: BrewingMethod[] = [
  {
    id: 'v60',
    name: 'Hario V60',
    description: 'Temiz, parlak ve asidik notaları öne çıkaran popüler bir pour-over demleme yöntemidir.',
    ratio: '1:16 (1 gr kahveye 16 ml su)',
    grindSize: 'Orta-ince (sofra tuzu gibi)',
    brewTime: '2:30 - 3:00 dakika',
    instructions: [
      'Filtre kağıdını V60\'a yerleştirin ve sıcak suyla ıslatın.',
      'Öğütülmüş kahveyi ekleyin ve yüzeyi düzeltin.',
      'Kahvenin iki katı kadar suyla (örn: 15gr kahve için 30ml su) 30 saniyelik bir ön demleme (bloom) yapın.',
      'Kalan suyu dairesel hareketlerle, yavaşça ve sabit bir akışla 2:00-2:30 dakika içinde dökün.',
      'Tüm su süzüldüğünde demlemeyi sonlandırın.'
    ],
    equipment: [
      { name: 'Hario V60 Dripper', link: '#' },
      { name: 'Gooseneck Kettle', link: '#' },
      { name: 'Dijital Tartı', link: '#' },
    ]
  },
  {
    id: 'frenchpress',
    name: 'French Press',
    description: 'Tam gövdeli, zengin ve tortulu bir kahve deneyimi sunan klasik bir demleme yöntemidir.',
    ratio: '1:15 (1 gr kahveye 15 ml su)',
    grindSize: 'Kalın (deniz tuzu gibi)',
    brewTime: '4:00 dakika',
    instructions: [
      'Kalın öğütülmüş kahveyi French Press\'e koyun.',
      'Sıcak suyu kahvenin üzerine dökerek tüm kahvenin ıslandığından emin olun.',
      'Bir kaşıkla karıştırın ve kapağı piston yukarıda olacak şekilde kapatın.',
      '4 dakika bekleyin.',
      'Pistonu yavaşça ve sabit bir basınçla aşağıya doğru itin.',
      'Kahveyi hemen bir bardağa veya sürahiye aktarın.'
    ],
    equipment: [
      { name: 'Bodum French Press', link: '#' },
      { name: 'Kahve Değirmeni', link: '#' },
      { name: 'Su Isıtıcısı', link: '#' },
    ]
  },
  {
    id: 'aeropress',
    name: 'AeroPress',
    description: 'Hızlı, çok yönlü ve pürüzsüz bir kahve sunan, basınçla çalışan modern bir demleme ekipmanıdır.',
    ratio: '1:14 (1 gr kahveye 14 ml su)',
    grindSize: 'Orta (standart veya ters metot için)',
    brewTime: '1:30 - 2:00 dakika',
    instructions: [
      'Filtre kağıdını kapağa yerleştirin ve sıcak suyla ıslatın.',
      'AeroPress\'i bardağınızın üzerine yerleştirin ve kahveyi ekleyin.',
      'Suyu yavaşça ekleyin ve 10 saniye karıştırın.',
      'Pistonu yerleştirin ve yaklaşık 20-30 saniye sürecek şekilde yavaşça aşağı itin.',
      'Basınç arttığında durun. Afiyet olsun!'
    ],
    equipment: [
      { name: 'AeroPress Go', link: '#' },
      { name: 'Metal Filtre (Opsiyonel)', link: '#' },
      { name: 'Dijital Tartı', link: '#' },
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Kahve Çekirdeği Seçim Rehberi: Arabica vs. Robusta',
    excerpt: 'Kahve dünyasının iki devini karşılaştırıyoruz. Damak zevkinize en uygun çekirdeği nasıl seçeceğinizi öğrenin...',
    author: 'Ayşe Yılmaz',
    date: '15 Ağustos 2024',
    content: 'Kahve seçimi, mükemmel bir fincanın ilk ve en önemli adımıdır. Piyasada yüzlerce çeşit bulunsa da, temelde iki dev oyuncu öne çıkar: Arabica ve Robusta. Peki, bu iki çekirdek türü arasındaki farklar nelerdir ve hangisi sizin için daha uygun?\n\n**Arabica:** Dünya kahve üretiminin yaklaşık %60\'ını oluşturan Arabica, genellikle yüksek rakımlarda, hassas iklim koşullarında yetişir. Bu zahmetli yetiştirme süreci, onun karmaşık ve zengin lezzet profiline yansır. Arabica çekirdekleri, genellikle daha tatlı, meyvemsi ve çiçeksi notalara sahiptir. Asiditesi daha belirgin ve parlaktır. Eğer kahvenizde narin tatları, hafif bir içimi ve aromatik zenginliği seviyorsanız, %100 Arabica kahveler sizin için mükemmel bir seçim olacaktır.\n\n**Robusta:** Adından da anlaşılacağı gibi, Robusta daha dayanıklı bir bitkidir ve daha zorlu iklimlerde yetişebilir. Arabica\'ya göre neredeyse iki kat daha fazla kafein içerir. Bu da ona daha güçlü, daha dolgun ve acımsı bir tat verir. Lezzet profili genellikle çikolatamsı, fındıksı ve topraksı olarak tanımlanır. Özellikle sabahları sizi uyandıracak güçlü bir kahve veya espressonuzda yoğun bir krema arıyorsanız, Robusta içeren harmanlar harika bir seçenektir.'
  },
  {
    id: 2,
    title: 'Evde Cold Brew Nasıl Yapılır? Adım Adım Anlatım',
    excerpt: 'Sıcak yaz günlerinin vazgeçilmezi cold brew kahveyi evde kolayca hazırlamanın sırlarını paylaşıyoruz.',
    author: 'Barış Kaya',
    date: '10 Ağustos 2024',
    content: 'Cold Brew, sıcak su yerine soğuk su ile uzun sürede demlenen bir kahve türüdür. Bu yöntem, kahvenin asiditesini ve acılığını önemli ölçüde azaltarak, ortaya pürüzsüz, tatlı ve yumuşak içimli bir lezzet çıkarır. Evde cold brew yapmak ise sandığınızdan çok daha kolay!\n\n**İhtiyacınız Olanlar:**\n- Kalın öğütülmüş kahve (French Press ayarı idealdir)\n- Soğuk, filtrelenmiş su\n- Büyük bir kavanoz veya sürahi\n- Süzmek için tülbent, bez filtre veya French Press\n\n**Adım Adım Yapılışı:**\n1. **Oranı Ayarlayın:** Genellikle 1:8 oranı (1 birim kahveye 8 birim su) başlangıç için iyidir. Örneğin, 100 gram kahve için 800 ml su kullanabilirsiniz.\n2. **Karıştırın:** Kahveyi ve suyu kavanoza koyun. Tüm kahvenin ıslandığından emin olmak için iyice karıştırın.\n3. **Demlemeye Bırakın:** Kavanozun kapağını kapatın ve oda sıcaklığında veya buzdolabında 12 ila 24 saat arasında bekletin. Süre ne kadar uzarsa, kahve o kadar güçlü olur.\n4. **Süzün:** Demleme süresi dolduğunda, kahveyi dikkatlice süzün. İşte bu kadar! Elde ettiğiniz konsantreyi buzdolabında 2 haftaya kadar saklayabilirsiniz. Servis yaparken su veya süt ile seyrelterek keyfini çıkarın.'
  },
  {
    id: 3,
    title: 'Doğru Kahve Değirmeni Nasıl Seçilir?',
    excerpt: 'Bıçaklı mı, dişli mi? Seramik mi, çelik mi? Mükemmel demleme için en önemli ekipman olan değirmen seçimi...',
    author: 'Selin Öztürk',
    date: '5 Ağustos 2024',
    content: 'Taze öğütülmüş kahvenin aroması gibisi yoktur. Kahveyi demlemeden hemen önce öğütmek, lezzet ve tazelik açısından yapabileceğiniz en büyük iyiliktir. Ancak doğru değirmeni seçmek kafa karıştırıcı olabilir. İşte temel farklar:\n\n**Bıçaklı Değirmenler:** Bu değirmenler, kahve çekirdeklerini yüksek hızda dönen bir bıçakla parçalar. Uygun fiyatlı olsalar da, en büyük dezavantajları homojen bir öğütme sağlayamamalarıdır. Ortaya çıkan parçacık boyutları tutarsız olur, bu da demlemenizin dengesiz olmasına yol açar. Ayrıca bıçakların ısınması kahvenin tadını olumsuz etkileyebilir.\n\n**Dişli (Burr) Değirmenler:** Mükemmel kahveye giden yolda en iyi dostunuz dişli değirmenlerdir. İki adet dişli çark (burr) arasında çekirdekleri ezerek öğütürler. Bu yöntem, son derece tutarlı ve homojen bir öğütme sağlar. Öğütme boyutunu hassas bir şekilde ayarlayabilirsiniz, bu da V60 için ayrı, French Press için ayrı incelikte kahve elde etmenizi sağlar. Seramik ve çelik olmak üzere iki türü bulunur. Her ikisi de mükemmel sonuçlar verir. Bütçeniz elveriyorsa, kaliteli bir dişli değirmene yatırım yapmak, kahve deneyiminizi tamamen değiştirecektir.'
  }
];

export const COFFEE_VARIETIES: CoffeeVariety[] = [
  {
    id: 'arabica',
    name: 'Arabica',
    origin: 'Etiyopya, Latin Amerika, Asya',
    flavorProfile: 'Meyvemsi, tatlı, çiçeksi, parlak asidite',
    description: 'Dünya kahve üretiminin yaklaşık %60\'ını oluşturan Arabica, genellikle yüksek rakımlarda yetişir. Kompleks aromaları, tatlı notaları ve hoş asiditesi ile bilinir. Kaliteli bir fincan kahve için en çok tercih edilen çekirdek türüdür.',
  },
  {
    id: 'robusta',
    name: 'Robusta',
    origin: 'Vietnam, Brezilya, Endonezya',
    flavorProfile: 'Güçlü, çikolatamsı, fındıksı, düşük asidite',
    description: 'Arabica\'ya göre neredeyse iki kat daha fazla kafein içeren Robusta, daha güçlü ve dolgun bir gövdeye sahiptir. Genellikle espresso harmanlarında krema artırıcı olarak ve instant kahve üretiminde kullanılır. Hastalıklara karşı daha dayanıklıdır.',
  },
  {
    id: 'liberica',
    name: 'Liberica',
    origin: 'Batı ve Orta Afrika, Filipinler',
    flavorProfile: 'Odunsu, dumanlı, çiçeksi, isli, bazen meyvemsi',
    description: 'Dünya üretiminin küçük bir kısmını oluşturan nadir bir türdür. Büyük, asimetrik çekirdeklere sahiptir. Eşsiz odunsu ve dumanlı aromasıyla bilinir, bu da onu diğer kahve türlerinden oldukça farklı kılar. Geleneksel kahve lezzetlerinden sıkılanlar için ilginç bir alternatiftir.',
  },
  {
    id: 'excelsa',
    name: 'Excelsa',
    origin: 'Güneydoğu Asya',
    flavorProfile: 'Ekşi, meyvemsi, koyu ve gizemli tatlar',
    description: 'Yakın zamanda Liberica ailesinin bir varyetesi olarak yeniden sınıflandırılmıştır. Genellikle Liberica ile karıştırılsa da, daha çok ekşi ve meyvemsi bir tat profili sunar. Hem hafif kavrulmuş hem de koyu kavrulmuş kahvelerin özelliklerini aynı anda sergileyebilen kompleks bir yapıya sahiptir.',
  },
  {
    id: 'geisha',
    name: 'Geisha (veya Gesha)',
    origin: 'Etiyopya (Gesha Köyü), Panama',
    flavorProfile: 'Yasemin, bergamot, tropik meyveler, çay gibi',
    description: 'Dünyanın en seçkin ve pahalı kahvelerinden biridir. Olağanüstü derecede karmaşık ve narin bir lezzet profiline sahiptir. Özellikle Panama\'da yetiştirilen versiyonları, uluslararası yarışmalarda rekor fiyatlara satılmıştır. Çay benzeri berraklığı ve yoğun çiçeksi notaları ile ünlüdür.',
  },
  {
    id: 'bourbon',
    name: 'Bourbon',
    origin: 'Reunion Adası (eski adıyla Île Bourbon)',
    flavorProfile: 'Tatlı, karamel, çikolata, meyvemsi (elma, kiraz)',
    description: 'Arabica\'nın en önemli ve kültürel olarak en önemli varyetelerinden biridir. Typica\'dan daha fazla verim sunar ve kompleks, dengeli tat profiliyle bilinir. Birçok modern kahve varyetesinin atasıdır. Genellikle Latin Amerika\'da yetiştirilir.',
  },
  {
    id: 'typica',
    name: 'Typica',
    origin: 'Yemen, Etiyopya',
    flavorProfile: 'Temiz, tatlı, çiçeksi, limon ve narenciye notaları',
    description: 'Bourbon ile birlikte Arabica\'nın en eski ve en önemli iki varyetesinden biridir. Düşük verimli olmasına rağmen, mükemmel fincan kalitesi nedeniyle değerlidir. Temiz, parlak asiditesi ve hafif gövdesiyle bilinir. Birçok diğer varyetenin temelini oluşturur.',
  },
];

export const COFFEE_TIPS: CoffeeTip[] = [
  {
    id: 'spices',
    title: 'Sıcak Baharat Dokunuşu',
    description: 'Kahvenize ekleyeceğiniz bir tutam baharat, ona anında derinlik ve karakter katabilir. Özellikle kış aylarında içinizi ısıtacak bir lezzet şöleni yaratır.',
    icon: 'Spice',
    idealFor: '3\'ü 1 arada, granül kahve, filtre kahve, French Press',
    examples: ['Toz Tarçın', 'Taze Rendelenmiş Muskat', 'Kakule Tozu', 'Bir Tutam Acı Biber']
  },
  {
    id: 'syrups',
    title: 'Tatlı Şuruplar ve Özütler',
    description: 'Klasik kahve lezzetinden sıkıldıysanız, birkaç damla şurup veya özüt ile kahvenizi tatlı bir mola içeceğine dönüştürebilirsiniz. Kendi ev yapımı lattelerinizi yaratın.',
    icon: 'Syrup',
    idealFor: 'Tüm kahve türleri, özellikle sütsüz kahveler ve soğuk kahveler',
    examples: ['Vanilya Özütü', 'Karamel Şurubu', 'Fındık Şurubu', 'Badem Özütü']
  },
  {
    id: 'cream',
    title: 'Kremalı ve Köpüklü Sütler',
    description: 'Kahvenizin dokusunu tamamen değiştirin. Basit bir sütü köpürterek veya farklı süt alternatifleri deneyerek çok daha zengin ve yumuşak içimli bir kahve elde edebilirsiniz.',
    icon: 'Cream',
    idealFor: '3\'ü 1 arada, Americano, espresso, filtre kahve',
    examples: ['El köpürtücüsü ile ısıtılmış süt', 'Yulaf sütü (köpürmeye uygun)', 'Bir kaşık krema', 'Hindistan cevizi sütü']
  },
  {
    id: 'chocolate',
    title: 'Çikolata ve Kakao Büyüsü',
    description: 'Kahve ve çikolatanın mükemmel uyumunu kullanarak kendi mochanızı yapın. Hem enerjinizi hem de modunuzu yükseltecek basit ama etkili bir yöntem.',
    icon: 'Chocolate',
    idealFor: 'Tüm kahve türleri, özellikle sert içimli kahveler',
    examples: ['Bir parça bitter çikolata (sıcak kahvede eriterek)', 'Kaliteli kakao tozu', 'Beyaz çikolata parçacıkları']
  },
  {
    id: 'salt',
    title: 'Bir Tutam Tuzun Gücü',
    description: 'Kulağa garip gelse de, çok küçük bir tutam tuz, kahvenin acılığını dengeleyerek alttaki tatlı notaları ortaya çıkarabilir. Özellikle fazla kavrulmuş veya acı kahveler için harikadır.',
    icon: 'Salt',
    idealFor: 'Fazla demlenmiş veya acı filtre kahve, granül kahve',
    examples: ['Çok az miktarda sofra tuzu veya deniz tuzu']
  },
  {
    id: 'citrus',
    title: 'Narenciye Ferahlığı',
    description: 'Kahvenize taze ve canlandırıcı bir aroma katmak için narenciye kabuklarından faydalanın. Özellikle yaz aylarında ve soğuk demleme kahvelerde ferahlatıcı bir etki yaratır.',
    icon: 'Citrus',
    idealFor: 'Filtre kahve, Cold Brew, Americano',
    examples: ['Bir parça portakal kabuğu rendesi', 'Limon kabuğu (yağını çıkarmak için bardağın kenarına sürün)']
  }
];

export const ROAST_LEVELS: RoastLevel[] = [
  {
    id: 'light',
    name: 'Açık Kavrum (Light Roast)',
    description: 'Kahvenin orijinal karakterini, meyvemsi ve çiçeksi notalarını en çok koruyan kavurma seviyesidir. Çekirdekler açık kahverengidir ve yüzeyleri yağsızdır. Yüksek asiditeye sahiptirler.',
    color: 'bg-amber-300',
    flavorNotes: ['Meyvemsi (narenciye, böğürtlen)', 'Çiçeksi (yasemin, bergamot)', 'Yüksek Asidite', 'Çay benzeri gövde'],
  },
  {
    id: 'medium',
    name: 'Orta Kavrum (Medium Roast)',
    description: 'Dengeli bir lezzet profili sunar. Asidite biraz yumuşar, gövde dolgunlaşır ve karamel, çikolata gibi tatlı notalar belirginleşir. Kuzey Amerika\'da en popüler kavurma seviyesidir.',
    color: 'bg-amber-600',
    flavorNotes: ['Dengeli Asidite', 'Karamel, Fındık', 'Çikolata', 'Dolgun Gövde'],
  },
  {
    id: 'dark',
    name: 'Koyu Kavrum (Dark Roast)',
    description: 'Çekirdekler koyu kahverengi, neredeyse siyahtır ve yüzeyleri parlak ve yağlıdır. Kahvenin orijinal aromaları yerine kavurma sürecinin getirdiği isli, bitter ve baharatlı tatlar öne çıkar. Düşük asiditeye sahiptir.',
    color: 'bg-stone-800',
    flavorNotes: ['Düşük Asidite', 'Bitter Çikolata', 'İsli, Dumanlı', 'Baharatlı', 'Yoğun Gövde'],
  },
];

export const WATER_QUALITY_TOPICS: WaterQualityTopic[] = [
  {
    id: 'importance',
    title: 'Suyun Önemi: %98 Faktörü',
    content: 'Bir fincan kahvenin %98\'inden fazlası sudur. Bu nedenle, kullandığınız suyun kalitesi, demlemenizin sonucunu doğrudan etkiler. Kötü su, en kaliteli kahve çekirdeklerinin bile lezzetini maskeleyebilir.',
    icon: 'WaterDrop',
  },
  {
    id: 'composition',
    title: 'İdeal Su Kompozisyonu',
    content: 'İdeal kahve suyu, koku ve klordan arındırılmış olmalıdır. Ayrıca, kahvenin lezzetlerini en iyi şekilde çıkarmak için belirli bir mineral içeriğine (özellikle magnezyum ve kalsiyum) sahip olmalıdır. Çok sert veya çok yumuşak su, dengesiz bir demlemeye yol açar.',
    icon: 'Mineral',
  },
  {
    id: 'improvement',
    title: 'Evde Su Kalitesini Artırma',
    content: 'Musluk suyunuzun kalitesinden emin değilseniz, en basit çözüm filtrelenmiş su kullanmaktır. Sürahi tipi filtreler veya musluğa takılan filtreler işe yarayacaktır. Alternatif olarak, hazır kaynak suları da iyi bir seçenek olabilir.',
    icon: 'Filter',
  },
];