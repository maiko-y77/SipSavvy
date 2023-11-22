import React from 'react'
import { UserIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getArticles } from '@/lib/Articles/data';



export default async function Page() {
    const page = await getArticles()

    return (
        <>
            <div className="article-main">
                <div className="article-container">
                    {page.map(({ title }) =>
                        <div>
                            <p className="article-div">
                                {title}
                            </p>
                        </div>)}
                    <div className="post-info">
                        <div className="author-info">
                            <div className="author-bullet">
                                <a className="avatar icon" href="/">
                                    <UserIcon width={36} height={36} />
                                </a>
                                <p>
                                    Author Name
                                </p>
                            </div>
                            <div className="text-wrapper-4">Follow</div>
                            <div className="icons">
                                <div className="group-2">
                                    <img className="vector" src="img/vector-2.svg" />
                                    <div className="element">650 likes</div>
                                </div>
                                <img className="img-2" src="img/vector.svg" />
                            </div>
                        </div>
                        <p className="article-p">Published on October 25, 2023 12:27 AM.</p>
                    </div>
                    <img className="article-image" src="img/image.png" />
                    <div className="article-content">
                        {page.map(({ content }) =>
                            <div>
                                <p className="text-wrapper-5">
                                    {content}
                                </p>
                            </div>)
                        }
                    </div>
                    <div className="author-info-2">
                        <div className="author-bullet">
                            <a className="avatar icon" href="/">
                                <UserIcon width={36} height={36} />
                            </a>
                            <p>
                                Author Name
                            </p>
                        </div>
                        <div className="text-wrapper-4">Follow</div>
                        <div className="icons">
                            <div className="group-2">
                                <img className="vector" src="img/vector-3.svg" />
                                <div className="element">650 likes</div>
                            </div>
                            <img className="img-2" src="img/vector-4.svg" />
                        </div>
                    </div>
                    <div className="related-articles">
                        <div className="sidebar-section">
                            <div className="section-title-here">Related Articles</div>
                        </div>
                        <div className="related-articles-2">
                            <div className="related-article-item">
                                <div className="article-picture2"></div>
                                <div className="article-content2">
                                    <p className="post-title">Winemakers Can No Longer Afford to Drink Their Own Wine in America</p>
                                    <p className="article-preview">
                                        Thanks to restaurants’ price gouging tactics, you probably can’t either — There’s something screwed
                                        up about a winemaker not being able to ...
                                    </p>
                                    <div className="author-bullet">
                                        <a className="avatar icon" href="/">
                                            <UserIcon width={36} height={36} />
                                        </a>
                                        <p>
                                            Author Name
                                        </p>
                                    </div>
                                </div>
                                <Link href="#" className="save-btn">
                                    <BookmarkIcon width={18} height={24} />
                                    <div className="text-wrapper-8">Save for later</div>
                                </Link>
                            </div>
                            <div className="related-article-item">
                                <div className="article-picture2"></div>
                                <div className="article-content2">
                                    {page.map(({ title }) =>
                                        <div>
                                            <p className="post-title">
                                                {title}
                                            </p>
                                        </div>)
                                    }
                                    <p className="article-preview">
                                        And why you should drink them too — I call it The Sommelier’s Paradox. It goes like this: The more
                                        popular a wine is, the less likely ...
                                    </p>
                                    <div className="author-bullet">
                                        <a className="avatar icon" href="/">
                                            <UserIcon width={24} height={24} />
                                        </a>
                                        <p>
                                            Author Name
                                        </p>
                                    </div>
                                </div>
                                <Link href="#" className="save-btn">
                                    <BookmarkIcon width={18} height={24} />
                                    <div className="text-wrapper-8">Save for later</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
