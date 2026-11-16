declare function normalize(path: string): string

declare namespace normalize {
  export { normalize as normalize, normalize as default }
}

export = normalize
