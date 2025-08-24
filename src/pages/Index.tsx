import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationGoal = 500000;
  const currentAmount = 127300;
  const progressPercent = (currentAmount / donationGoal) * 100;

  const donationAmounts = [500, 1000, 2500, 5000, 10000];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-forest text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Flower2" size={32} className="text-honey" />
              <span className="text-2xl font-bold font-montserrat">BeeConservation</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="hover:text-honey transition-colors">О пчелах</a>
              <a href="#initiatives" className="hover:text-honey transition-colors">Инициативы</a>
              <a href="#donate" className="hover:text-honey transition-colors">Поддержать</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-honey text-forest-dark px-4 py-2 text-lg font-semibold">
            🌱 Спасем пчел - сохраним планету
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 text-forest-dark">
            Сохраним пчел для
            <span className="text-honey block mt-2">будущих поколений</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Пчелы опыляют треть всех продуктов питания в мире. Без них наша экосистема рухнет. 
            Присоединяйтесь к глобальному движению по защите этих удивительных созданий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-forest hover:bg-forest-light text-white px-8 py-4 text-lg">
              <Icon name="Heart" size={20} className="mr-2" />
              Поддержать проект
            </Button>
            <Button variant="outline" size="lg" className="border-forest text-forest hover:bg-forest hover:text-white px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Progress */}
      <section id="donate" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-honey/20 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold font-montserrat text-forest-dark mb-4">
                Сбор средств
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Помогите нам собрать средства на защиту пчелиных семей и восстановление их habitat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-forest">
                    {currentAmount.toLocaleString('ru-RU')} ₽
                  </span>
                  <span className="text-lg text-gray-600">
                    цель: {donationGoal.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Progress value={progressPercent} className="h-4 mb-4" />
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{Math.round(progressPercent)}% собрано</span>
                  <span>234 донатора</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                {donationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    className="py-6 text-lg font-semibold border-2 border-honey/40 hover:bg-honey hover:text-white transition-all"
                  >
                    {amount.toLocaleString('ru-RU')} ₽
                  </Button>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-honey hover:bg-honey-dark text-white px-12 py-4 text-xl font-semibold">
                  <Icon name="CreditCard" size={24} className="mr-3" />
                  Пожертвовать сейчас
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Безопасная оплата через проверенные платежные системы
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Bees */}
      <section id="about" className="py-16 px-4 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-montserrat mb-4 text-forest-dark">
              Почему пчелы так важны?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Пчелы - это основа нашей экосистемы и продовольственной безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/b2208ddd-d051-4dcd-adf6-563a84e9a84d.jpg" 
                alt="Пчела на цветке" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-honey p-3 rounded-full">
                  <Icon name="Sprout" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-forest-dark">Опыление растений</h3>
                  <p className="text-gray-600">
                    Пчелы опыляют 80% всех цветковых растений, включая большинство сельскохозяйственных культур
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-honey p-3 rounded-full">
                  <Icon name="Apple" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-forest-dark">Продовольственная безопасность</h3>
                  <p className="text-gray-600">
                    Каждый третий кусочек пищи зависит от работы пчел. Без них мы потеряем множество фруктов и овощей
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-honey p-3 rounded-full">
                  <Icon name="TreePine" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-forest-dark">Биоразнообразие</h3>
                  <p className="text-gray-600">
                    Пчелы поддерживают разнообразие растительного мира и стабильность экосистем
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section id="initiatives" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-montserrat mb-4 text-forest-dark">
              Наши экологические инициативы
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Комплексный подход к сохранению пчел и их естественной среды обитания
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mb-4">
                  <Icon name="Home" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-forest-dark">Пчелиные домики</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Устанавливаем специальные домики для диких пчел в городских парках и лесных зонах
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-honey rounded-full flex items-center justify-center mb-4">
                  <Icon name="Flower" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-forest-dark">Медоносные поля</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Создаем и поддерживаем поля с медоносными растениями для питания пчелиных семей
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-forest-dark">Образование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Проводим образовательные программы о важности пчел для детей и взрослых
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="/img/49ccc23e-28ce-4a2d-8986-a7f0f8acb95a.jpg" 
              alt="Экологическая инициатива" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-forest/60 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Восстановление природных habitat</h3>
                <p className="text-xl mb-6">Создаем безопасные зоны для пчел и других опылителей</p>
                <Button className="bg-honey hover:bg-honey-dark text-white">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flower2" size={24} className="text-honey" />
                <span className="text-xl font-bold">BeeConservation</span>
              </div>
              <p className="text-green-200">
                Глобальная инициатива по защите пчел и сохранению биоразнообразия планеты
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">О проекте</h4>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-honey transition-colors">Наша миссия</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Отчеты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Участие</h4>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-honey transition-colors">Стать волонтером</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">Партнерство</a></li>
                <li><a href="#" className="hover:text-honey transition-colors">События</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-green-200">
                <p>info@beeconservation.org</p>
                <p>+7 (495) 123-45-67</p>
                <div className="flex gap-4 mt-4">
                  <Icon name="Instagram" size={20} className="hover:text-honey cursor-pointer transition-colors" />
                  <Icon name="Youtube" size={20} className="hover:text-honey cursor-pointer transition-colors" />
                  <Icon name="Facebook" size={20} className="hover:text-honey cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-forest-light mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 BeeConservation. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;