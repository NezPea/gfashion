// our components props accept a number for the initial value
export interface article { title?: String, contant?: String }
export interface banner { title?: String, contant?: String }
export interface stories { title?: String, contant?: String }
export interface community { title?: String, contant?: String }

/**
 * type for lists
 */
export interface listtype {
  state: boolean,
  title: string,
  time: string,
  from: string,
  contant: string,
}
