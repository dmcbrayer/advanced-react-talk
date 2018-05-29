import React from 'react'
import { Card } from './Card'

const defaultImg = "https://via.placeholder.com/350x200"
const defaultText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

export const DefaultCard = () => <Card imageSrc={defaultImg} content={defaultText} />
