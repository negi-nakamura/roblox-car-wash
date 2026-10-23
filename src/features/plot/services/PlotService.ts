import { Service, OnStart } from '@flamework/core'

@Service()
export class PlotService implements OnStart {
	public onStart() {
		print('[Flamework] PlotService started')
	}

	public GetMessage(): string {
		return 'Flamework is working!'
	}
}
