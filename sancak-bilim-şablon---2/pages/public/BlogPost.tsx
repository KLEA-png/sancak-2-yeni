import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../../constants';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = MOCK_BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-background min-h-screen">
       {/* Simple Header Spacer */}
       <div className="h-24 bg-primary"></div>

       <div className="container mx-auto px-4 md:px-6 py-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 font-medium transition-colors">
                <ArrowLeft size={18} /> Blog'a Dön
            </Link>

            <article className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-[400px] relative w-full">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="flex items-center gap-4 mb-4 text-sm font-medium text-white/90">
                            <span className="bg-accent px-3 py-1 rounded-full text-white font-bold text-xs uppercase tracking-wide">{post.category}</span>
                            <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                        </div>
                        <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight text-white">{post.title}</h1>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Main Content */}
                        <div className="flex-1">
                            <p className="text-xl font-medium text-gray-800 mb-8 leading-relaxed border-l-4 border-primary pl-4 italic">
                                {post.summary}
                            </p>
                            
                            <div 
                                className="prose prose-lg max-w-none text-gray-600 prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-primary hover:prose-a:text-accent prose-img:rounded-xl"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>

                        {/* Sidebar / Share */}
                        <div className="w-full md:w-64 space-y-8">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Share2 size={18} /> Paylaş
                                </h4>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                                        <Facebook size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors">
                                        <Twitter size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-blue-700 hover:bg-blue-50 transition-colors">
                                        <Linkedin size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                <h4 className="font-bold text-primary mb-2">Hemen Kaydolun</h4>
                                <p className="text-sm text-gray-600 mb-4">Erken kayıt fırsatlarından yararlanmak için formu doldurun.</p>
                                <button className="w-full py-3 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary-light transition-colors shadow-lg shadow-primary/20">
                                    İletişime Geç
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Read More Section */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-8">İlginizi Çekebilir</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {MOCK_BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map(related => (
                         <Link to={`/blog/${related.slug}`} key={related.id} className="group flex gap-4 items-start p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-100 transition-all border border-transparent hover:border-gray-50">
                            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">{related.title}</h4>
                                <span className="text-xs font-medium text-gray-400">{related.date}</span>
                            </div>
                         </Link>
                    ))}
                </div>
            </div>
       </div>
    </div>
  );
};

export default BlogPost;