import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  author: string;
  authorAvatar: string;
  uploadTime: string;
}

interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  time: string;
  likes: number;
}

const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
  <Card className="bg-card border-border hover-scale cursor-pointer animate-fade-in group">
    <div className="relative overflow-hidden rounded-t-lg">
      <img 
        src={video.thumbnail} 
        alt={video.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <Badge className="absolute bottom-2 right-2 bg-black/80 text-white">
        {video.duration}
      </Badge>
    </div>
    <CardContent className="p-4">
      <div className="flex space-x-3">
        <Avatar className="w-10 h-10 flex-shrink-0">
          <AvatarImage src={video.authorAvatar} />
          <AvatarFallback>{video.author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
            {video.title}
          </h3>
          <p className="text-sm text-muted-foreground">{video.author}</p>
          <p className="text-sm text-muted-foreground">
            {video.views} • {video.uploadTime}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => (
  <div className="flex space-x-3 animate-fade-in">
    <Avatar className="w-10 h-10 flex-shrink-0">
      <AvatarImage src={comment.avatar} />
      <AvatarFallback>{comment.author[0]}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <div className="flex items-center space-x-2 mb-1">
        <span className="font-semibold text-sm">{comment.author}</span>
        <span className="text-xs text-muted-foreground">{comment.time}</span>
      </div>
      <p className="text-sm text-foreground mb-2">{comment.text}</p>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
          <Icon name="ThumbsUp" size={16} />
          <span className="text-xs">{comment.likes}</span>
        </button>
        <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
          <Icon name="ThumbsDown" size={16} />
        </button>
        <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          Ответить
        </button>
      </div>
    </div>
  </div>
);

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Анна Петрова',
      avatar: '/placeholder.svg',
      text: 'Отличное видео! Очень помогло разобраться с темой 👍',
      time: '2 часа назад',
      likes: 12
    },
    {
      id: '2',
      author: 'Максим Иванов',
      avatar: '/placeholder.svg',
      text: 'Спасибо за подробное объяснение. Ждем продолжение!',
      time: '4 часа назад',
      likes: 8
    },
    {
      id: '3',
      author: 'Елена Сидорова',
      avatar: '/placeholder.svg',
      text: 'Можете ли вы сделать видео на похожую тему?',
      time: '1 день назад',
      likes: 5
    }
  ]);

  const videos: Video[] = [
    {
      id: '1',
      title: 'Современные технологии веб-разработки: React и TypeScript',
      thumbnail: '/img/fa58ee3d-1034-47cd-8daf-7914dfa8cac0.jpg',
      duration: '15:32',
      views: '125K просмотров',
      author: 'TechChannel',
      authorAvatar: '/placeholder.svg',
      uploadTime: '2 дня назад'
    },
    {
      id: '2',
      title: 'Путешествие в горы: захватывающие виды и приключения',
      thumbnail: '/img/e2b1883d-9b67-46a6-8a06-8b45261eb5f2.jpg',
      duration: '22:15',
      views: '89K просмотров',
      author: 'TravelVlog',
      authorAvatar: '/placeholder.svg',
      uploadTime: '3 дня назад'
    },
    {
      id: '3',
      title: 'Закат в городе: красота современной архитектуры',
      thumbnail: '/img/23cdf833-b734-4c28-9d35-54d0a78c49bf.jpg',
      duration: '8:45',
      views: '67K просмотров',
      author: 'CityLife',
      authorAvatar: '/placeholder.svg',
      uploadTime: '1 неделю назад'
    },
    {
      id: '4',
      title: 'Основы программирования для начинающих',
      thumbnail: '/img/fa58ee3d-1034-47cd-8daf-7914dfa8cac0.jpg',
      duration: '18:20',
      views: '234K просмотров',
      author: 'CodeMaster',
      authorAvatar: '/placeholder.svg',
      uploadTime: '1 неделю назад'
    },
    {
      id: '5',
      title: 'Лучшие места для фотосъемки в городе',
      thumbnail: '/img/23cdf833-b734-4c28-9d35-54d0a78c49bf.jpg',
      duration: '12:30',
      views: '156K просмотров',
      author: 'PhotoPro',
      authorAvatar: '/placeholder.svg',
      uploadTime: '2 недели назад'
    },
    {
      id: '6',
      title: 'Горный туризм: советы для начинающих',
      thumbnail: '/img/e2b1883d-9b67-46a6-8a06-8b45261eb5f2.jpg',
      duration: '25:10',
      views: '98K просмотров',
      author: 'MountainGuide',
      authorAvatar: '/placeholder.svg',
      uploadTime: '3 недели назад'
    }
  ];

  const sidebarItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'trending', label: 'Тренды', icon: 'TrendingUp' },
    { id: 'subscriptions', label: 'Подписки', icon: 'Users' },
    { id: 'library', label: 'Библиотека', icon: 'BookOpen' },
    { id: 'history', label: 'История', icon: 'History' },
    { id: 'playlists', label: 'Плейлисты', icon: 'List' },
    { id: 'upload', label: 'Загрузить', icon: 'Upload' }
  ];

  const addComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: 'Вы',
        avatar: '/placeholder.svg',
        text: newComment,
        time: 'только что',
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-4">
            <div className="gradient-pink-cyan p-2 rounded-xl">
              <Icon name="Play" size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold gradient-text">VideoHub</h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-6">
            <div className="relative">
              <Input
                placeholder="Поиск видео..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-12 bg-muted border-muted-foreground/20"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 gradient-pink-cyan text-white hover:opacity-90"
              >
                <Icon name="Search" size={16} />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button size="sm" variant="ghost" className="hover:bg-muted">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>У</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-muted/30 min-h-screen p-4 border-r border-border">
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all hover-scale ${
                  activeSection === item.id
                    ? 'gradient-pink-cyan text-white'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon name={item.icon as any} size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeSection === 'home' && (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Рекомендуемые видео</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Комментарии ({comments.length})</h3>
                
                {/* Add Comment */}
                <div className="mb-8">
                  <div className="flex space-x-3">
                    <Avatar className="w-10 h-10 flex-shrink-0">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>У</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Input
                        placeholder="Добавить комментарий..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="mb-3 bg-muted border-muted-foreground/20"
                        onKeyPress={(e) => e.key === 'Enter' && addComment()}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setNewComment('')}
                        >
                          Отмена
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={addComment}
                          className="gradient-pink-cyan text-white hover:opacity-90"
                          disabled={!newComment.trim()}
                        >
                          Комментировать
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="mb-6" />

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                  ))}
                </div>
              </div>
            </>
          )}

          {activeSection === 'trending' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 gradient-text">🔥 Тренды</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.slice(0, 3).map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}

          {activeSection === 'subscriptions' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Подписки</h2>
              <p className="text-muted-foreground">Здесь будут видео от ваших подписок</p>
            </div>
          )}

          {activeSection === 'library' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Библиотека</h2>
              <p className="text-muted-foreground">Ваши сохраненные видео и плейлисты</p>
            </div>
          )}

          {activeSection === 'history' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">История просмотров</h2>
              <p className="text-muted-foreground">История ваших просмотров</p>
            </div>
          )}

          {activeSection === 'playlists' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Плейлисты</h2>
              <p className="text-muted-foreground">Ваши созданные плейлисты</p>
            </div>
          )}

          {activeSection === 'upload' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 gradient-text">Загрузить видео</h2>
              <Card className="p-8 text-center border-dashed border-2 border-primary/50">
                <Icon name="Upload" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Перетащите видео сюда</h3>
                <p className="text-muted-foreground mb-4">или нажмите для выбора файла</p>
                <Button className="gradient-pink-cyan text-white hover:opacity-90">
                  Выбрать файл
                </Button>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Index;