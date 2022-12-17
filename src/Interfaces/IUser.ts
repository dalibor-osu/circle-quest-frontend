export interface IUser {
	username: string,
	user_id: number,
	additional_info: {
		avatar_url: string,
		country: {
			code: string,
			name: string,
		},
		discord: string,
		is_restricted: boolean,
	},
	osu_stats: {
		level: number,
		global_rank: number,
		pp: number,
		play_count: number,
		play_time: number,
		ranked_score: number,
		hit_accuracy: number,
		maximum_combo: number,
		replays_watched: number,
	},
}