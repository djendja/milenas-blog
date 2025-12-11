import { cn } from '@/utilities/ui'
import React from 'react'

import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
  postLayout?: '4' | '2' | null | undefined
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts, postLayout } = props

  console.log(postLayout)

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-3 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div
                  key={index}
                  className={
                    postLayout === '2'
                      ? 'col-span-3 sm:col-span-4 lg:col-span-6' // 2 posts layout
                      : 'col-span-3 sm:col-span-4 lg:col-span-3' // 4 posts layout
                  }
                >
                  <Card className="h-full" doc={result} relationTo="posts" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
