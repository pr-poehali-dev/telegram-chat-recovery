import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const RecoveryForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    chatType: "",
    chatName: "",
    messagesCount: "",
    dateFrom: "",
    dateTo: "",
    description: "",
    pricingPlan: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://functions.poehali.dev/c55c14ff-e567-4f45-ab97-e928bc31f390', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({
          userName: "",
          userPhone: "",
          userEmail: "",
          chatType: "",
          chatName: "",
          messagesCount: "",
          dateFrom: "",
          dateTo: "",
          description: "",
          pricingPlan: ""
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-8 bg-card border-border max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon name="FileText" className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Заявка на восстановление</h3>
          <p className="text-muted-foreground">Заполните форму для начала процесса</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="userName">Ваше имя *</Label>
            <Input
              id="userName"
              placeholder="Иван Иванов"
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="userPhone">Телефон *</Label>
            <Input
              id="userPhone"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.userPhone}
              onChange={(e) => setFormData({ ...formData, userPhone: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="userEmail">Email</Label>
          <Input
            id="userEmail"
            type="email"
            placeholder="example@mail.ru"
            value={formData.userEmail}
            onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="chatType">Тип чата *</Label>
            <Select value={formData.chatType} onValueChange={(value) => setFormData({ ...formData, chatType: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Личная переписка</SelectItem>
                <SelectItem value="group">Групповой чат</SelectItem>
                <SelectItem value="channel">Канал</SelectItem>
                <SelectItem value="secret">Секретный чат</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="chatName">Название чата/имя собеседника</Label>
            <Input
              id="chatName"
              placeholder="@username или название"
              value={formData.chatName}
              onChange={(e) => setFormData({ ...formData, chatName: e.target.value })}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="messagesCount">Примерное кол-во сообщений</Label>
            <Input
              id="messagesCount"
              type="number"
              placeholder="1000"
              value={formData.messagesCount}
              onChange={(e) => setFormData({ ...formData, messagesCount: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateFrom">С какой даты</Label>
            <Input
              id="dateFrom"
              type="date"
              value={formData.dateFrom}
              onChange={(e) => setFormData({ ...formData, dateFrom: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateTo">По какую дату</Label>
            <Input
              id="dateTo"
              type="date"
              value={formData.dateTo}
              onChange={(e) => setFormData({ ...formData, dateTo: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pricingPlan">Выберите тариф *</Label>
          <Select value={formData.pricingPlan} onValueChange={(value) => setFormData({ ...formData, pricingPlan: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите тариф" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Базовый - 990₽</SelectItem>
              <SelectItem value="advanced">Продвинутый - 2490₽</SelectItem>
              <SelectItem value="premium">Премиум - 4990₽</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Дополнительная информация</Label>
          <Textarea
            id="description"
            placeholder="Опишите подробнее, что нужно восстановить..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
          />
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex gap-2 items-start">
            <Icon name="Info" className="text-primary mt-1" size={20} />
            <div className="text-sm">
              <p className="font-semibold mb-1">Как это работает:</p>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>После отправки заявки мы свяжемся с вами для уточнения деталей</li>
                <li>Вы предоставите временный доступ к Telegram через безопасное API</li>
                <li>Наша система проведёт восстановление сообщений</li>
                <li>Вы получите архив с восстановленными данными</li>
              </ol>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
          disabled={loading}
        >
          {loading ? (
            <>
              <Icon name="Loader2" className="animate-spin mr-2" size={20} />
              Отправка...
            </>
          ) : (
            <>
              Отправить заявку
              <Icon name="Send" className="ml-2" size={20} />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default RecoveryForm;