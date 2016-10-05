import * as LogManager from 'aurelia-logging';
import {PLATFORM,DOM} from 'aurelia-pal';
import {parseQueryString,join,buildQueryString} from 'aurelia-path';
import {inject,Container} from 'aurelia-dependency-injection';
import {deprecated} from 'aurelia-metadata';
import {EventAggregator} from 'aurelia-event-aggregator';
import {BindingSignaler} from 'aurelia-templating-resources';
import {Redirect,RouteConfig} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';
import {Config,Rest} from 'aurelia-api';

export declare class Popup {
  constructor();
  open(url: string, windowName: string, options?: {}): Popup;
  eventListener(redirectUri: string): Promise<any>;
  pollPopup(): Promise<any>;
}

/* eslint-disable max-lines */
export declare class BaseConfig {
  
  /**
     * Prepends baseUrl to a given url
     * @param  {string} url The relative url to append
     * @return {string}     joined baseUrl and url
     */
  joinBase(url: string): string;
  
  /**
     * Merge current settings with incoming settings
     * @param  {Object} incoming Settings object to be merged into the current configuration
     */
  configure(incoming: {}): Config;
  
  /* ----------- default  config ----------- */
  // Used internally. The used Rest instance; set during configuration (see index.js)
  client: Rest;
  
  // If using aurelia-api:
  // =====================
  // This is the name of the endpoint used for any requests made in relation to authentication (login, logout, etc.). An empty string selects the default endpoint of aurelia-api.
  endpoint: string;
  
  // When authenticated, these endpoints will have the token added to the header of any requests (for authorization). Accepts an array of endpoint names. An empty string selects the default endpoint of aurelia-api.
  configureEndpoints: Array<string>;
  
  // SPA related options
  // ===================
  // The SPA url to which the user is redirected after a successful login
  loginRedirect: any;
  
  // The SPA url to which the user is redirected after a successful logout
  logoutRedirect: any;
  
  // The SPA route used when an unauthenticated user tries to access an SPA page that requires authentication
  loginRoute: any;
  
  // Whether or not an authentication token is provided in the response to a successful signup
  loginOnSignup: any;
  
  // If loginOnSignup == false: The SPA url to which the user is redirected after a successful signup (else loginRedirect is used)
  signupRedirect: any;
  
  // The SPA url to load when the token expires
  expiredRedirect: any;
  
  // The SPA url to load when the authentication status changed in other tabs/windows (detected through storageEvents)
  storageChangedRedirect: any;
  
  // API related options
  // ===================
  // The base url used for all authentication related requests, including provider.url below.
  // This appends to the httpClient/endpoint base url, it does not override it.
  baseUrl: any;
  
  // The API endpoint to which login requests are sent
  loginUrl: any;
  
  // The API endpoint to which logout requests are sent (not needed for jwt)
  logoutUrl: any;
  
  // The HTTP method used for 'unlink' requests (Options: 'get' or 'post')
  logoutMethod: any;
  
  // The API endpoint to which signup requests are sent
  signupUrl: any;
  
  // The API endpoint used in profile requests (inc. `find/get` and `update`)
  profileUrl: any;
  
  // The method used to update the profile ('put' or 'patch')
  profileMethod: any;
  
  // The API endpoint used with oAuth to unlink authentication
  unlinkUrl: any;
  
  // The HTTP method used for 'unlink' requests (Options: 'get' or 'post')
  unlinkMethod: any;
  
  // The API endpoint to which refreshToken requests are sent. null = loginUrl
  refreshTokenUrl: any;
  
  // Token Options
  // =============
  // The header property used to contain the authToken in the header of API requests that require authentication
  authHeader: any;
  
  // The token name used in the header of API requests that require authentication
  authTokenType: any;
  
  // The the property from which to get the access token after a successful login or signup. Can also be dotted eg "accessTokenProp.accessTokenName"
  accessTokenProp: any;
  
  // If the property defined by `accessTokenProp` is an object:
  // ------------------------------------------------------------
  //This is the property from which to get the token `{ "accessTokenProp": { "accessTokenName" : '...' } }`
  accessTokenName: any;
  
  // This allows the token to be a further object deeper `{ "accessTokenProp": { "accessTokenRoot" : { "accessTokenName" : '...' } } }`
  accessTokenRoot: any;
  
  // Refresh Token Options
  // =====================
  // Option to turn refresh tokens On/Off
  useRefreshToken: any;
  
  // The option to enable/disable the automatic refresh of Auth tokens using Refresh Tokens
  autoUpdateToken: any;
  
  // Oauth Client Id
  clientId: any;
  
  // The the property from which to get the refresh token after a successful token refresh. Can also be dotted eg "refreshTokenProp.refreshTokenProp"
  refreshTokenProp: any;
  
  // The property name used to send the existing token when refreshing `{ "refreshTokenSubmitProp": '...' }`
  refreshTokenSubmitProp: any;
  
  // If the property defined by `refreshTokenProp` is an object:
  // -----------------------------------------------------------
  // This is the property from which to get the token `{ "refreshTokenProp": { "refreshTokenName" : '...' } }`
  refreshTokenName: any;
  
  // This allows the refresh token to be a further object deeper `{ "refreshTokenProp": { "refreshTokenRoot" : { "refreshTokenName" : '...' } } }`
  refreshTokenRoot: any;
  
  // The property name from which to get the user authentication token. Can also be dotted idTokenProp.idTokenName
  idTokenProp: any;
  
  // This is the property from which to get the id token `{ "idTokenProp": { "idTokenName" : '...' } }`
  idTokenName: any;
  
  // This allows the id_token to be a further object deeper `{ "idTokenProp": { "idTokenRoot" : { "idTokenName" : '...' } } }`
  idTokenRoot: any;
  
  // Miscellaneous Options
  // =====================
  // Whether to enable the fetch interceptor which automatically adds the authentication headers
  // (or not... e.g. if using a session based API or you want to override the default behaviour)
  httpInterceptor: any;
  
  // For OAuth only: Tell the API whether or not to include token cookies in the response (for session based APIs)
  withCredentials: any;
  
  // Controls how the popup is shown for different devices (Options: 'browser' or 'mobile')
  platform: any;
  
  // Determines the `PLATFORM` property name upon which aurelia-authentication data is stored (Default: `PLATFORM.localStorage`)
  storage: any;
  
  // The key used for storing the authentication response locally
  storageKey: any;
  
  // optional function to extract the expiration date. takes the server response as parameter
  // eg (expires_in in sec): getExpirationDateFromResponse = serverResponse => new Date().getTime() + serverResponse.expires_in * 1000;
  getExpirationDateFromResponse: any;
  
  // optional function to extract the access token from the response. takes the server response as parameter
  // eg: getAccessTokenFromResponse = serverResponse => serverResponse.data[0].access_token;
  getAccessTokenFromResponse: any;
  
  // optional function to extract the refresh token from the response. takes the server response as parameter
  // eg: getRefreshTokenFromResponse = serverResponse => serverResponse.data[0].refresh_token;
  getRefreshTokenFromResponse: any;
  
  // List of value-converters to make global
  globalValueConverters: any;
  
  //OAuth provider specific related configuration
  // ============================================
  providers: any;
  authToken: any;
  responseTokenProp: any;
  tokenRoot: any;
  tokenName: any;
  tokenPrefix: any;
  
  /**
     * @deprecated
     */
  current: any;
}
export declare class Storage {
  constructor(config: BaseConfig);
  get(key: string): string;
  set(key: string, value: string): any;
  remove(key: string): any;
}
export declare class AuthLock {
  constructor(storage: Storage, config: BaseConfig);
  open(options: {}, userData?: {}): Promise<any>;
}
export declare class OAuth1 {
  constructor(storage: Storage, popup: Popup, config: BaseConfig);
  open(options: {}, userData: {}): Promise<any>;
  exchangeForToken(oauthData: {}, userData: {}, provider: string): Promise<any>;
}

/**
 * OAuth2 service class
 *
 * @export
 * @class OAuth2
 */
export declare class OAuth2 {
  
  /**
     * Creates an instance of OAuth2.
     *
     * @param {Storage} storage The Storage instance
     * @param {Popup}   popup   The Popup instance
     * @param {Config}  config  The Config instance
     *
     * @memberOf OAuth2
     */
  constructor(storage: Storage, popup: Popup, config: BaseConfig);
  
  /**
     * Open OAuth2 flow
     *
     * @param {{}} options  OAuth2 and dialog options
     * @param {{}} userData Extra data for the authentications server
     * @returns {Promise<any>} Authentication server response
     *
     * @memberOf OAuth2
     */
  open(options: {}, userData: {}): Promise<any>;
  
  /**
     * Exchange the code from the external provider by a token from the authentication server
     *
     * @param {{}} oauthData The oauth data from the external provider
     * @param {{}} userData Extra data for the authentications server
     * @param {string} provider The name of the provider
     * @returns {Promise<any>} The authenticaion server response with the token
     *
     * @memberOf OAuth2
     */
  exchangeForToken(oauthData: {}, userData: {}, provider: string): Promise<any>;
  
  /**
     * Create the query string for a provider
     *
     * @param {string} provider The provider name
     * @returns {string} The resulting query string
     *
     * @memberOf OAuth2
     */
  buildQuery(provider: string): string;
  
  /**
     * Send logout request to oath2 rpovider
     *
     * @param {[{}]} options Logout option
     * @returns {Promise<any>} The OAuth provider response
     *
     * @memberOf OAuth2
     */
  close(options?: {}): Promise<any>;
  
  /**
     * Build query for logout request
     *
     * @param {string} provider The rpovider name
     * @returns {string} The logout query string
     *
     * @memberOf OAuth2
     */
  buildLogoutQuery(provider: string): string;
}

/* eslint-disable max-lines */
export declare class Authentication {
  constructor(storage: Storage, config: BaseConfig, oAuth1: OAuth1, oAuth2: OAuth2, auth0Lock: AuthLock);
  
  /* deprecated methods */
  getLoginRoute(): any;
  getLoginRedirect(): any;
  getLoginUrl(): any;
  getSignupUrl(): any;
  getProfileUrl(): any;
  getToken(): any;
  responseObject: {};
  hasDataStored: boolean;
  
  /* get/set responseObject */
  getResponseObject(): {};
  setResponseObject(response: {}): any;
  
  /* get data, update if needed first */
  getAccessToken(): string;
  getRefreshToken(): string;
  getIdToken(): string;
  getPayload(): {};
  getExp(): Number;
  
  /* get status from data */
  getTtl(): Number;
  isTokenExpired(): boolean;
  isAuthenticated(): boolean;
  
  /* get and set from response */
  getDataFromResponse(response: {}): {};
  
  /**
     * Extract the token from the server response
     *
     * @param {{}} response The response
     * @param {string} tokenProp tokenProp
     * @param {string} tokenName tokenName
     * @param {string} tokenRoot tokenRoot
     * @returns {string} The token
     *
     * @memberOf Authentication
     */
  getTokenFromResponse(response: {}, tokenProp: string, tokenName: string, tokenRoot: string): string;
  toUpdateTokenCallstack(): Promise<any>;
  resolveUpdateTokenCallstack(response: {}): any;
  
  /**
     * Authenticate with third-party
     *
     * @param {String}    name        Name of the provider
     * @param {[{}]}      [userData]  Additional data send to the authentication server
     *
     * @return {Promise<any>} The authentication server response
     */
  authenticate(name: string, userData?: {}): Promise<any>;
  
  /**
     * Send logout request to oauth provider
     *
     * @param {string} name The provider name
     * @returns {Promise<any>} The server response
     *
     * @memberOf Authentication
     */
  logout(name: string): Promise<any>;
  
  /**
     * Redirect (page reload if applicable for the browsers save password option)
     *
     * @param {[string]} redirectUrl The redirect url
     * @param {[string]} defaultRedirectUrl The defaultRedirectUrl
     * @param {[string]} query The optional query string to add the the url
     * @returns {undefined} undefined
     *
     * @memberOf Authentication
     */
  redirect(redirectUrl?: string, defaultRedirectUrl?: string, query?: string): any;
}

/* eslint-disable max-lines */
export declare class AuthService {
  
  /**
     * The Authentication instance that handles the token
     *
     * @param  {Authentication}
     */
  authentication: Authentication;
  
  /**
     * The Config instance that contains the current configuration setting
     *
     * @param  {Config}
     */
  config: Config;
  
  /**
     * The current login status
     *
     * @param  {Boolean}
     */
  authenticated: Boolean;
  
  /**
     * The currently set timeoutID
     *
     * @param  {Number}
     */
  timeoutID: Number;
  
  /**
     *  Create an AuthService instance
     *
     * @param  {Authentication}  authentication  The Authentication instance to be used
     * @param  {Config}          config          The Config instance to be used
     * @param  {BindingSignaler} bindingSignaler The BindingSignaler instance to be used
     * @param  {EventAggregator} eventAggregator The EventAggregator instance to be used
     */
  constructor(authentication: Authentication, config: BaseConfig, bindingSignaler: BindingSignaler, eventAggregator: EventAggregator);
  
  /**
     * The handler used for storage events. Detects and handles authentication changes in other tabs/windows
     *
     * @param {StorageEvent} event StorageEvent
     */
  storageEventHandler: any;
  
  /**
     * Getter: The configured client for all aurelia-authentication requests
     *
     * @return {HttpClient}
     */
  client: HttpClient;
  
  /**
     * Getter: The authentication class instance
     *
     * @return {boolean}
     * @deprecated
     */
  auth: Authentication;
  
  /**
     * Sets the login timeout
     *
     * @param  {Number} ttl  Timeout time in ms
     */
  setTimeout(ttl: Number): any;
  
  /**
     * Clears the login timeout
     */
  clearTimeout(): any;
  
  /**
     * Stores and analyses the servers responseObject. Sets login status and timeout
     *
     * @param {{}} response The servers response as object
     */
  setResponseObject(response: {}): any;
  
  /**
     * Update authenticated. Sets login status and timeout
     */
  updateAuthenticated(): any;
  
  /**
     * Get current user profile from server
     *
     * @param {({}|Number|String)} [criteriaOrId] (optional) An object or a Number|String converted to {id: criteriaOrId}
     * @returns {Promise<any>} The server response
     *
     * @memberOf AuthService
     */
  getMe(criteriaOrId?: {} | Number | String): Promise<any>;
  
  /**
     * Send current user profile update to server
     *
     * @param {{}}                body           Request body with data.
     * @param {{}|Number|String}  [criteriaOrId] (optional) An object or a Number|String converted to {id: criteriaOrId}
     *
     * @return {Promise<any>} The server response
     */
  updateMe(body: {}, criteriaOrId?: {} | Number | String): Promise<any>;
  
  /**
     * Get accessToken from storage
     *
     * @returns {String} Current accessToken
     */
  getAccessToken(): String;
  getCurrentToken(): String;
  
  /**
     * Get refreshToken from storage
     *
     * @returns {String} Current refreshToken
     */
  getRefreshToken(): String;
  
  /**
     * Get idToken from storage
     *
     * @returns {String} Current idToken
     */
  getIdToken(): String;
  
  /**
    * Gets authentication status from storage
    *
    * @returns {Boolean} For Non-JWT and unexpired JWT: true, else: false
    */
  isAuthenticated(): Boolean;
  
  /**
     * Gets exp in milliseconds
     *
     * @returns {Number} Exp for JWT tokens, NaN for all other tokens
     */
  getExp(): Number;
  
  /**
     * Gets ttl in seconds
     *
     * @returns {Number} Ttl for JWT tokens, NaN for all other tokens
     */
  getTtl(): Number;
  
  /**
    * Gets exp from token payload and compares to current time
    *
    * @returns {Boolean} Returns (ttl > 0)? for JWT, undefined other tokens
    */
  isTokenExpired(): Boolean;
  
  /**
    * Get payload from tokens
    *
    * @returns {{}} Payload for JWT, else null
    */
  getTokenPayload(): {};
  
  /**
     * Request new access token
     *
     * @returns {Promise<any>} Requests new token. can be called multiple times
     */
  updateToken(): Promise<any>;
  
  /**
     * Signup locally. Login and redirect depending on config
     *
     * @param {String|{}}   displayNameOrCredentials displayName | object with signup data.
     * @param {[String]|{}} emailOrOptions           [email | options for post request]
     * @param {[String]}    passwordOrRedirectUri    [password | optional redirectUri overwrite]
     * @param {[{}]}        options                  [options]
     * @param {[String]}    redirectUri              [optional redirectUri overwrite]
     *
     * @return {Promise<any>} Server response as Object
     */
  signup(displayNameOrCredentials: String | {}, emailOrOptions?: String | {}, passwordOrRedirectUri?: String, options?: {}, redirectUri?: String): Promise<any>;
  
  /**
     * Login locally. Redirect depending on config
     *
     * @param {[String]|{}} emailOrCredentials      email | object with signup data.
     * @param {[String]}    [passwordOrOptions]     [password | options for post request]
     * @param {[{}]}        [optionsOrRedirectUri]  [options | redirectUri overwrite]]
     * @param {[String]}    [redirectUri]           [optional redirectUri overwrite]
     *
     * @return {Promise<Object>|Promise<Error>}    Server response as Object
     */
  login(emailOrCredentials: String | {}, passwordOrOptions?: String, optionsOrRedirectUri?: {}, redirectUri?: String): Promise<any>;
  
  /**
     * Logout locally and redirect to redirectUri (if set) or redirectUri of config. Sends logout request first, if set in config
     *
     * @param {[String]}    [redirectUri]                     [optional redirectUri overwrite]
     * @param {[String]}    [query]                           [optional query]
     * @param {[String]}    [name]                            [optional name Name of the provider]
     *
     * @return {Promise<any>}     Server response as Object
     */
  logout(redirectUri?: String, query?: String, name?: String): Promise<any>;
  
  /**
     * Authenticate with third-party and redirect to redirectUri (if set) or redirectUri of config
     *
     * @param {String}    name          Name of the provider
     * @param {[String]}  [redirectUri] [optional redirectUri overwrite]
     * @param {[{}]}      [userData]    [optional userData for the local authentication server]
     *
     * @return {Promise<any>} Server response as Object
     */
  authenticate(name: String, redirectUri?: String, userData?: {}): Promise<any>;
  
  /**
     * Unlink third-party
     *
     * @param {String}    name          Name of the provider
     * @param {[String]}  [redirectUri] [optional redirectUri overwrite]
     *
     * @return {Promise<any>}  Server response as Object
     */
  unlink(name: String, redirectUri?: String): Promise<any>;
}
export declare class AuthenticateStep {
  constructor(authService: AuthService);
  run(routingContext?: any, next?: any): any;
}
export declare class AuthorizeStep {
  constructor(authService: AuthService);
  run(routingContext?: any, next?: any): any;
}
export declare class FetchConfig {
  
  /**
     * Construct the FetchConfig
     *
     * @param {HttpClient} httpClient httpClient
     * @param {Config} clientConfig clientConfig
     * @param {Authentication} authService authService
     * @param {BaseConfig} config baseConfig
     */
  constructor(httpClient: HttpClient, clientConfig: Config, authService: Authentication, config: BaseConfig);
  
  /**
     * Interceptor for HttpClient
     *
     * @return {{request: Function, response: Function}} The interceptor
     */
  interceptor: { request: Function, response: Function };
  
  /**
     * Configure client(s) with authorization interceptor
     *
     * @param {HttpClient|Rest|string[]} client HttpClient, rest client or api endpoint name, or an array thereof
     *
     * @return {HttpClient[]} The configured client(s)
     */
  configure(client: HttpClient | Rest | Array<string>): HttpClient | Array<HttpClient>;
}

// added for bundling
// eslint-disable-line no-unused-vars
// eslint-disable-line no-unused-vars
// eslint-disable-line no-unused-vars
/**
 * Configure the plugin.
 *
 * @export
 * @param {FrameworkConfiguration} frameworkConfig The FrameworkConfiguration instance
 * @param {{}|Function}            config          The Config instance
 *
 */
export declare function configure(frameworkConfig: { container: Container, globalResources: (() => any) }, config: {} | Function): any;
export declare class AuthenticatedFilterValueConverter {
  constructor(authService: AuthService);
  
  /**
     * route toView predictator on route.config.auth === (parameter || authService.isAuthenticated())
     * @param  {RouteConfig}  routes            the routes array to convert
     * @param  {[Boolean]}    [isAuthenticated] optional isAuthenticated value. default: this.authService.authenticated
     * @return {Boolean}      show/hide element
     */
  toView(routes: RouteConfig, isAuthenticated?: Boolean): Boolean;
}
export declare class AuthenticatedValueConverter {
  constructor(authService?: any);
  
  /**
     * element toView predictator on authService.isAuthenticated()
     * @return {Boolean}  show/hide element
     */
  toView(): any;
}
export declare class AuthFilterValueConverter {
  
  /**
     * route toView predictator on route.config.auth === isAuthenticated
     * @param  {RouteConfig}  routes            the routes array to convert
     * @param  {Boolean}      isAuthenticated   authentication status
     * @return {Boolean}      show/hide element
     */
  toView(routes: RouteConfig, isAuthenticated: Boolean): Boolean;
}