import { useState } from 'react'
import '../App.css'

export function FollowCard ({ userName, userImg, followYou, userTag, isVerify = false }) {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleClick = () => setIsFollowing(!isFollowing)

  const buttonClassName = isFollowing ? 'x-followCard-button is-following' : 'x-followCard-button'

  const buttonText = !isFollowing ? 'Follow' : 'Following'

  const isVerifySvg = () => {
    if (!isVerify) return

    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z' strokeWidth='0' fill='#09f' />
      </svg>
    )
  }

  const isFollowingYouText = followYou ? <span className='follow-you'>Follows you</span> : null

  return (
    <article className='x-followCard'>
      <header className='x-followCard-header'>
        <img
          className='avatar'
          src={userImg} alt='Avatar de Facundo Meoni'
        />
        <div className='x-followCard-text'>
          <span className='x-followCard-text-span'>
            <a>{userName}</a>
            {isVerifySvg()}
          </span>
          <span className='tag'>
            @{userTag}
            {isFollowingYouText}
          </span>
        </div>
      </header>

      <aside className='x-followCard-aside'>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='x-followCard-buttonText-1'>{buttonText}</span>
          <span className='x-followCard-buttonText-2'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
