export interface LanyardAPI {
  data: LanyardData;
  success: boolean;
}

export interface LanyardData {
  kv: Kv;
  spotify: Spotify;
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
}

export interface Activity {
  id: string;
  name: string;
  type: number;
  timestamps: Timestamps;
  application_id?: string;
  created_at: number;
  flags?: number;
  state?: string;
  session_id?: string;
  details?: string;
  assets?: Assets;
  sync_id?: string;
  party?: Party;
  buttons?: string[];
}

export interface Assets {
  large_image: string;
  large_text: string;
  small_image?: string;
  small_text?: string;
}

export interface Party {
  id: string;
}

export interface Timestamps {
  start: number;
  end?: number;
}

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  global_name: string;
  avatar_decoration_data: null;
  display_name: string;
  public_flags: number;
}

export interface Kv {}

export interface Spotify {
  track_id: string;
  timestamps: Timestamps;
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
}
