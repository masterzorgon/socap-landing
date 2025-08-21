import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { Heading, Subheading } from '@/components/text'
import { image } from '@/sanity/image'
import { getRelatedPosts } from '@/sanity/queries'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'

interface RelatedPost {
    title: string | null
    slug: string | null
    publishedAt: string | null
    mainImage: {
        asset?: {
            _ref: string
            _type: 'reference'
            _weak?: boolean
        }
        hotspot?: any
        crop?: any
        alt?: string
        _type: 'image'
    } | null
    excerpt: string | null
    author: {
        name: string | null
        image: {
            asset?: {
                _ref: string
                _type: 'reference'
                _weak?: boolean
            }
            hotspot?: any
            crop?: any
            _type: 'image'
        } | null
    } | null
    categories: Array<{
        title: string | null
        slug: string | null
    }> | null
}

interface RelatedArticlesProps {
    currentSlug: string
    category: string
    limit?: number
}

export async function RelatedArticles({
    currentSlug,
    category,
    limit = 3
}: RelatedArticlesProps) {
    const relatedPosts = await getRelatedPosts(currentSlug, category, limit)

    if (!relatedPosts || relatedPosts.length === 0) {
        return null
    }

    return (
        <Container className="my-16">
            <div className="text-center">
                <Subheading>Related Articles</Subheading>
                <Heading as="h2" className="mt-2">
                    Continue reading
                </Heading>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post: RelatedPost) => (
                    <article key={post.slug} className="group">
                        <Link href={`/blog/${post.slug}`} className="block">
                            <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                                {post.mainImage ? (
                                    <img
                                        alt={post.mainImage.alt || ''}
                                        src={image(post.mainImage).size(600, 400).url()}
                                        className="aspect-3/2 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="aspect-3/2 w-full bg-gray-200 flex items-center justify-center">
                                        <div className="text-gray-400 text-sm">No image</div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <time dateTime={post.publishedAt || ''}>
                                        {dayjs(post.publishedAt).format('MMM D, YYYY')}
                                    </time>
                                    {post.author && (
                                        <>
                                            <span>•</span>
                                            <span>{post.author.name}</span>
                                        </>
                                    )}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200 mb-3 overflow-hidden">
                                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                                        {post.title}
                                    </span>
                                </h3>

                                {post.excerpt && (
                                    <p className="text-sm text-gray-600 mb-4 overflow-hidden" style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {post.excerpt}
                                    </p>
                                )}

                                <div className="flex items-center justify-between">
                                    {post.categories && post.categories.length > 0 && (
                                        <div className="flex flex-wrap gap-1">
                                            {post.categories.slice(0, 2).map((category) => (
                                                <span
                                                    key={category.slug}
                                                    className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                                                >
                                                    {category.title}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <ChevronRightIcon className="size-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </Container>
    )
} 