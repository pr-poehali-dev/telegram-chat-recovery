import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="MessageSquare" className="text-primary" size={28} />
            <span className="text-xl font-bold">TelegramRecover</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Возможности</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">Как работает</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Попробовать
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Восстановите утраченные переписки
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Профессиональный сервис восстановления удалённых и потерянных сообщений в Telegram. 
              Быстро, безопасно, конфиденциально.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Начать восстановление
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 animate-fade-in-up">
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Shield" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Безопасно</h3>
              <p className="text-muted-foreground">Полная конфиденциальность и защита ваших данных</p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Icon name="Zap" className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстро</h3>
              <p className="text-muted-foreground">Восстановление за 5-15 минут</p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="CheckCircle" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия результата</h3>
              <p className="text-muted-foreground">Возврат средств, если не восстановим</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Возможности сервиса</h2>
            <p className="text-xl text-muted-foreground">Всё что нужно для восстановления ваших сообщений</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="MessageCircle" className="text-primary" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Все типы сообщений</h3>
                  <p className="text-muted-foreground">Восстанавливаем текст, фото, видео, документы, голосовые и стикеры</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Icon name="Users" className="text-secondary" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Личные и групповые чаты</h3>
                  <p className="text-muted-foreground">Работаем с любыми типами диалогов и каналами</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Clock" className="text-primary" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">История любой давности</h3>
                  <p className="text-muted-foreground">Восстанавливаем сообщения любой давности, даже многолетней</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Icon name="Database" className="text-secondary" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Экспорт данных</h3>
                  <p className="text-muted-foreground">Сохраняйте восстановленные переписки в удобном формате</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Lock" className="text-primary" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Конфиденциальность</h3>
                  <p className="text-muted-foreground">Полное шифрование и удаление данных после восстановления</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Icon name="Headphones" className="text-secondary" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Поддержка 24/7</h3>
                  <p className="text-muted-foreground">Всегда на связи, чтобы помочь вам</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground">Простой процесс в 4 шага</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Создайте заявку</h3>
                <p className="text-muted-foreground">Опишите, какие сообщения нужно восстановить</p>
              </div>
              <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 border-2 border-secondary">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Предоставьте доступ</h3>
                <p className="text-muted-foreground">Безопасная авторизация через Telegram API</p>
              </div>
              <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-secondary to-transparent" />
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ждите результата</h3>
                <p className="text-muted-foreground">Наша система восстановит ваши сообщения</p>
              </div>
              <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 border-2 border-secondary">
                <span className="text-2xl font-bold text-secondary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Получите данные</h3>
              <p className="text-muted-foreground">Скачайте восстановленные переписки</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий план</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Базовый</h3>
                <p className="text-muted-foreground mb-6">Для одного диалога</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">990₽</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>До 1000 сообщений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Один диалог или чат</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Восстановление за 24 часа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Базовая поддержка</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Выбрать план
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-b from-primary/10 to-card border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Продвинутый</h3>
                <p className="text-muted-foreground mb-6">Для нескольких чатов</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">2490₽</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>До 10000 сообщений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>До 5 диалогов или чатов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Восстановление за 12 часов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Восстановление медиафайлов</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Выбрать план
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-secondary transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Премиум</h3>
                <p className="text-muted-foreground mb-6">Без ограничений</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">4990₽</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span>Неограниченное количество</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span>Все диалоги и чаты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span>Восстановление за 6 часов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span>VIP поддержка 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span>Все типы медиафайлов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span>Персональный менеджер</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Выбрать план
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">support@telegramrecover.ru</p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-secondary transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="text-secondary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground">@telegramrecover_bot</p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (800) 555-35-35</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="MessageSquare" className="text-primary" size={24} />
              <span className="font-semibold">TelegramRecover</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 TelegramRecover. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
