import React from '@rbxts/react'
import ReactRoblox from '@rbxts/react-roblox'
import { Players } from '@rbxts/services'
import Root from './Root'

export default function App(name = 'App') {
	const playerGui = Players.LocalPlayer.WaitForChild('PlayerGui') as PlayerGui
	const screenGui = new Instance('ScreenGui')
	screenGui.Name = name
	screenGui.IgnoreGuiInset = true
	screenGui.ResetOnSpawn = false
	screenGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
	screenGui.Parent = playerGui

	const root = ReactRoblox.createRoot(screenGui)
	root.render(Root())

	return root
}
