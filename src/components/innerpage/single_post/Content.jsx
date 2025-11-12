import React from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../../../data/home1/blogs';

function Content({ article }) {
  if (!article) return null;

  // Parse content into sections - simpler approach
  const lines = article.fullContent.split('\n').filter(line => line.trim());
  const sections = [];
  let currentParagraphs = [];

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // Check if this is a header line
    const isNumberedHeader = /^\d+\./.test(trimmedLine);
    const isSpecialHeader = ['Closing Thought', 'Design principle:', 'The principle to remember:'].includes(trimmedLine);
    const isKeywordHeader = ['Start with the purpose', 'The power of the table', 'Light it right', 
      'Chairs that invite conversation', 'Add soul through layers', 'Play with materials',
      'Mirrors are magic', 'Go minimal, not sterile', 'Lighting that heals', 'Small details, big mood',
      'Symmetry creates calm', 'Add a scent signature', 'Play with light', 'Functional elegance',
      'Infuse personality', 'Start with purpose', 'Color psychology at play', 'Ergonomics matter',
      'Lighting that supports rhythm', 'Mood-setting through design', 'The element of flow',
      'Design with flexibility in mind', 'Color that speaks joy', 'Textures and materials matter',
      'Encourage creativity', 'Smart storage solutions', 'Personal touches',
      'Think of it as an experience', 'Create spatial rhythm', 'Add life through plants',
      'Lighting for magic moments', 'Texture brings joy'].includes(trimmedLine);

    if (isNumberedHeader || isSpecialHeader || isKeywordHeader) {
      // Save previous paragraphs if any
      if (currentParagraphs.length > 0) {
        sections.push({ type: 'text', content: currentParagraphs });
        currentParagraphs = [];
      }
      // Add header
      sections.push({ type: 'heading', content: [line] });
    } else {
      // It's a paragraph line
      currentParagraphs.push(line);
    }
  });

  // Add remaining paragraphs
  if (currentParagraphs.length > 0) {
    sections.push({ type: 'text', content: currentParagraphs });
  }

  // Get related articles (excluding current one)
  const relatedArticles = blogsData.filter(item => item.id !== article.id).slice(0, 2);

  // Create share URLs
  const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const shareTitle = encodeURIComponent(article.title);
  const twitterUrl = shareUrl ? `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}` : '#';
  const facebookUrl = shareUrl ? `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` : '#';
  const linkedinUrl = shareUrl ? `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}` : '#';
  const whatsappUrl = shareUrl ? `https://wa.me/?text=${shareTitle}%20${shareUrl}` : '#';

  return (
    <section className="tc-post-content-style1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="info">
              <div className="breadcromb wow fadeInUp slow" data-wow-delay="0.2s">
                <Link to="/"> Home </Link>
                <span className="icon">/</span>
                <Link to="/blog"> Blog </Link>
                <span className="icon">/</span>
                <span> {article.title} </span>
              </div>
              <div
                className="text fsz-16 color-666 mb-70 wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                {sections.map((section, i) => (
                  <div key={i} className="content-section">
                    {section.type === 'heading' ? (
                      <h6 className={`fsz-24 fw-600 mb-30 ${i > 0 ? 'mt-70' : ''}`}>
                        {section.content[0]}
                      </h6>
                    ) : (
                      <div className="mb-40">
                        {section.content.map((paragraph, j) => (
                          <p key={j} className="mb-20 lh-6">
                            {paragraph.startsWith('*') ? (
                              <span className="ms-20 d-block">• {paragraph.substring(2)}</span>
                            ) : (
                              paragraph
                            )}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="share-content wow fadeInUp slow" data-wow-delay="0.2s">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tags">
                    <span>{article.category}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="share mt-4 mt-lg-0 justify-content-lg-end">
                    <span className="txt me-3"> Share on </span>
                    <div className="links">
                      <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                        <i className="fab fa-x-twitter"></i>
                      </a>
                      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="related-posts">
              <div className="title mb-70">
                <div
                  className="row align-items-center wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  <div className="col-lg-8">
                    <h3 className="fsz-45 text-capitalize"> Related Articles </h3>
                  </div>
                  <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="arrows me-lg-0 ms-lg-auto">
                      <div className="swiper-button-prev"></div>
                      <div className="swiper-button-next"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="related-slider wow fadeInUp slow" data-wow-delay="0.2s">
                <div className="swiper-wrapper">
                  {relatedArticles.map((item, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="post-card">
                        <Link
                          to={`/blog/single-post/${item.id}`}
                          className="img th-280 radius-7 overflow-hidden d-block"
                        >
                          <img src={item.img} alt={item.title} className="img-cover" />
                        </Link>
                        <div className="info pt-30">
                          <div className="tags color-666 text-uppercase fsz-12">
                            <span className="color-orange1">{item.category}</span>
                            <span className="circle icon-3 bg-666 rounded-circle mx-3"></span>
                            <span> {item.history.replace('<br />', ' ')} </span>
                          </div>
                          <h3 className="title mt-15">
                            <Link to={`/blog/single-post/${item.id}`} className="hover-orange1 fsz-24">
                              {item.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
