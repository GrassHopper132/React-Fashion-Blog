import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

const posts = [
  {
    id: 1,
    date: '11/12/20',
    title: 'On the Street in Brooklyn',
    imageSrc: 'https://picsum.photos/800/400?random=1',
    imageAlt: 'Fashionable woman walking in Brooklyn street',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    date: '11/11/20',
    title: 'Vintage in Vogue',
    imageSrc: 'https://picsum.photos/800/400?random=2',
    imageAlt: 'Model wearing vintage streetwear style',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Eu volutpat odio facilisis mauris sit amet massa vitae. Elementum sagittis vitae et leo duis ut diam quam.'
  }
];

export default function App() {
  return (
    <div>
      <Header />
      <main>
        {posts.map((post) => (
          <Article
            key={post.id}
            date={post.date}
            title={post.title}
            imageSrc={post.imageSrc}
            imageAlt={post.imageAlt}
            text={post.text}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
