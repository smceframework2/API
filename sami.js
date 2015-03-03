(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '    <ul>                <li data-name="namespace:Smce" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Smce.html">Smce</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:Smce_Components" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Smce/Components.html">Components</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Smce_Components_Collection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Components/Collection.html">Collection</a>                    </div>                </li>                            <li data-name="class:Smce_Components_Output" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Components/Output.html">Output</a>                    </div>                </li>                            <li data-name="class:Smce_Components_Session" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Components/Session.html">Session</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Smce_Core" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Smce/Core.html">Core</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:Smce_Core_Di" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Smce/Core/Di.html">Di</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Smce_Core_Di_DiAdapter" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Smce/Core/Di/DiAdapter.html">DiAdapter</a>                    </div>                </li>                            <li data-name="class:Smce_Core_Di_DiCache" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Smce/Core/Di/DiCache.html">DiCache</a>                    </div>                </li>                            <li data-name="class:Smce_Core_Di_Singleton" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Smce/Core/Di/Singleton.html">Singleton</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Smce_Core_Di" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Core/Di.html">Di</a>                    </div>                </li>                            <li data-name="class:Smce_Core_EventManager" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Core/EventManager.html">EventManager</a>                    </div>                </li>                            <li data-name="class:Smce_Core_Loader" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Core/Loader.html">Loader</a>                    </div>                </li>                            <li data-name="class:Smce_Core_SmceFramework" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Core/SmceFramework.html">SmceFramework</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Smce_Driver" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Smce/Driver.html">Driver</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Smce_Driver_Memcache" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Driver/Memcache.html">Memcache</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Smce_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Smce/Http.html">Http</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Smce_Http_HttpException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Http/HttpException.html">HttpException</a>                    </div>                </li>                            <li data-name="class:Smce_Http_Response" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Http/Response.html">Response</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Smce_Mvc" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Smce/Mvc.html">Mvc</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:Smce_Mvc_Router" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Smce/Mvc/Router.html">Router</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:Smce_Mvc_Router_Exception" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Smce/Mvc/Router/Exception.html">Exception</a>                    </div>                </li>                            <li data-name="class:Smce_Mvc_Router_Route" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Smce/Mvc/Router/Route.html">Route</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Smce_Mvc_Acl" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Mvc/Acl.html">Acl</a>                    </div>                </li>                            <li data-name="class:Smce_Mvc_Router" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Mvc/Router.html">Router</a>                    </div>                </li>                            <li data-name="class:Smce_Mvc_Url" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Smce/Mvc/Url.html">Url</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Smce_App" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Smce/App.html">App</a>                    </div>                </li>                            <li data-name="class:Smce_Sm" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Smce/Sm.html">Sm</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    {"type": "Namespace", "link": "Smce.html", "name": "Smce", "doc": "Namespace Smce"},{"type": "Namespace", "link": "Smce/Components.html", "name": "Smce\\Components", "doc": "Namespace Smce\\Components"},{"type": "Namespace", "link": "Smce/Core.html", "name": "Smce\\Core", "doc": "Namespace Smce\\Core"},{"type": "Namespace", "link": "Smce/Core/Di.html", "name": "Smce\\Core\\Di", "doc": "Namespace Smce\\Core\\Di"},{"type": "Namespace", "link": "Smce/Driver.html", "name": "Smce\\Driver", "doc": "Namespace Smce\\Driver"},{"type": "Namespace", "link": "Smce/Http.html", "name": "Smce\\Http", "doc": "Namespace Smce\\Http"},{"type": "Namespace", "link": "Smce/Mvc.html", "name": "Smce\\Mvc", "doc": "Namespace Smce\\Mvc"},{"type": "Namespace", "link": "Smce/Mvc/Router.html", "name": "Smce\\Mvc\\Router", "doc": "Namespace Smce\\Mvc\\Router"},
            
            {"type": "Class", "fromName": "Smce", "fromLink": "Smce.html", "link": "Smce/App.html", "name": "Smce\\App", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\App", "fromLink": "Smce/App.html", "link": "Smce/App.html#method___construct", "name": "Smce\\App::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\App", "fromLink": "Smce/App.html", "link": "Smce/App.html#method___get", "name": "Smce\\App::__get", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Components", "fromLink": "Smce/Components.html", "link": "Smce/Components/Collection.html", "name": "Smce\\Components\\Collection", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method___construct", "name": "Smce\\Components\\Collection::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_each", "name": "Smce\\Components\\Collection::each", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_fetch", "name": "Smce\\Components\\Collection::fetch", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_map", "name": "Smce\\Components\\Collection::map", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_filter", "name": "Smce\\Components\\Collection::filter", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_pull", "name": "Smce\\Components\\Collection::pull", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_pop", "name": "Smce\\Components\\Collection::pop", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_diff", "name": "Smce\\Components\\Collection::diff", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_getAll", "name": "Smce\\Components\\Collection::getAll", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_first", "name": "Smce\\Components\\Collection::first", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_flatten", "name": "Smce\\Components\\Collection::flatten", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_get", "name": "Smce\\Components\\Collection::get", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_flip", "name": "Smce\\Components\\Collection::flip", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_has", "name": "Smce\\Components\\Collection::has", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_isEmpty", "name": "Smce\\Components\\Collection::isEmpty", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_keys", "name": "Smce\\Components\\Collection::keys", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_lists", "name": "Smce\\Components\\Collection::lists", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_merge", "name": "Smce\\Components\\Collection::merge", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_last", "name": "Smce\\Components\\Collection::last", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_offsetExists", "name": "Smce\\Components\\Collection::offsetExists", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_prepend", "name": "Smce\\Components\\Collection::prepend", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_reduce", "name": "Smce\\Components\\Collection::reduce", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_reverse", "name": "Smce\\Components\\Collection::reverse", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_search", "name": "Smce\\Components\\Collection::search", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_shift", "name": "Smce\\Components\\Collection::shift", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_sort", "name": "Smce\\Components\\Collection::sort", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_splice", "name": "Smce\\Components\\Collection::splice", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_transform", "name": "Smce\\Components\\Collection::transform", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_values", "name": "Smce\\Components\\Collection::values", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_unique", "name": "Smce\\Components\\Collection::unique", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_shuffle", "name": "Smce\\Components\\Collection::shuffle", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_count", "name": "Smce\\Components\\Collection::count", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_push", "name": "Smce\\Components\\Collection::push", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Collection", "fromLink": "Smce/Components/Collection.html", "link": "Smce/Components/Collection.html#method_offsetSet", "name": "Smce\\Components\\Collection::offsetSet", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Components", "fromLink": "Smce/Components.html", "link": "Smce/Components/Output.html", "name": "Smce\\Components\\Output", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Components\\Output", "fromLink": "Smce/Components/Output.html", "link": "Smce/Components/Output.html#method_setContentType", "name": "Smce\\Components\\Output::setContentType", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Output", "fromLink": "Smce/Components/Output.html", "link": "Smce/Components/Output.html#method_setFileName", "name": "Smce\\Components\\Output::setFileName", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Output", "fromLink": "Smce/Components/Output.html", "link": "Smce/Components/Output.html#method_put", "name": "Smce\\Components\\Output::put", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Output", "fromLink": "Smce/Components/Output.html", "link": "Smce/Components/Output.html#method_putFile", "name": "Smce\\Components\\Output::putFile", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Output", "fromLink": "Smce/Components/Output.html", "link": "Smce/Components/Output.html#method_getHeader", "name": "Smce\\Components\\Output::getHeader", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Components", "fromLink": "Smce/Components.html", "link": "Smce/Components/Session.html", "name": "Smce\\Components\\Session", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Components\\Session", "fromLink": "Smce/Components/Session.html", "link": "Smce/Components/Session.html#method_setSecurity", "name": "Smce\\Components\\Session::setSecurity", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Session", "fromLink": "Smce/Components/Session.html", "link": "Smce/Components/Session.html#method_register", "name": "Smce\\Components\\Session::register", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Session", "fromLink": "Smce/Components/Session.html", "link": "Smce/Components/Session.html#method_set", "name": "Smce\\Components\\Session::set", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Session", "fromLink": "Smce/Components/Session.html", "link": "Smce/Components/Session.html#method_get", "name": "Smce\\Components\\Session::get", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Session", "fromLink": "Smce/Components/Session.html", "link": "Smce/Components/Session.html#method_reset", "name": "Smce\\Components\\Session::reset", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Session", "fromLink": "Smce/Components/Session.html", "link": "Smce/Components/Session.html#method_remove", "name": "Smce\\Components\\Session::remove", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Session", "fromLink": "Smce/Components/Session.html", "link": "Smce/Components/Session.html#method_login", "name": "Smce\\Components\\Session::login", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Session", "fromLink": "Smce/Components/Session.html", "link": "Smce/Components/Session.html#method_getLoginStatus", "name": "Smce\\Components\\Session::getLoginStatus", "doc": "&quot;return bool&quot;"},
                    {"type": "Method", "fromName": "Smce\\Components\\Session", "fromLink": "Smce/Components/Session.html", "link": "Smce/Components/Session.html#method_isSessionStart", "name": "Smce\\Components\\Session::isSessionStart", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Core", "fromLink": "Smce/Core.html", "link": "Smce/Core/Di.html", "name": "Smce\\Core\\Di", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method___construct", "name": "Smce\\Core\\Di::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method_bind", "name": "Smce\\Core\\Di::bind", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method_resolve", "name": "Smce\\Core\\Di::resolve", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method_singleton", "name": "Smce\\Core\\Di::singleton", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method_remove", "name": "Smce\\Core\\Di::remove", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method_has", "name": "Smce\\Core\\Di::has", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method_reset", "name": "Smce\\Core\\Di::reset", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method_getKeys", "name": "Smce\\Core\\Di::getKeys", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method_getAll", "name": "Smce\\Core\\Di::getAll", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di.html#method_getCount", "name": "Smce\\Core\\Di::getCount", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di/DiAdapter.html", "name": "Smce\\Core\\Di\\DiAdapter", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Core\\Di\\DiAdapter", "fromLink": "Smce/Core/Di/DiAdapter.html", "link": "Smce/Core/Di/DiAdapter.html#method_set", "name": "Smce\\Core\\Di\\DiAdapter::set", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\DiAdapter", "fromLink": "Smce/Core/Di/DiAdapter.html", "link": "Smce/Core/Di/DiAdapter.html#method_get", "name": "Smce\\Core\\Di\\DiAdapter::get", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\DiAdapter", "fromLink": "Smce/Core/Di/DiAdapter.html", "link": "Smce/Core/Di/DiAdapter.html#method_setAdapter", "name": "Smce\\Core\\Di\\DiAdapter::setAdapter", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\DiAdapter", "fromLink": "Smce/Core/Di/DiAdapter.html", "link": "Smce/Core/Di/DiAdapter.html#method_isAdapter", "name": "Smce\\Core\\Di\\DiAdapter::isAdapter", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di/DiCache.html", "name": "Smce\\Core\\Di\\DiCache", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Core\\Di\\DiCache", "fromLink": "Smce/Core/Di/DiCache.html", "link": "Smce/Core/Di/DiCache.html#method___construct", "name": "Smce\\Core\\Di\\DiCache::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\DiCache", "fromLink": "Smce/Core/Di/DiCache.html", "link": "Smce/Core/Di/DiCache.html#method_cache", "name": "Smce\\Core\\Di\\DiCache::cache", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\DiCache", "fromLink": "Smce/Core/Di/DiCache.html", "link": "Smce/Core/Di/DiCache.html#method_get", "name": "Smce\\Core\\Di\\DiCache::get", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Core\\Di", "fromLink": "Smce/Core/Di.html", "link": "Smce/Core/Di/Singleton.html", "name": "Smce\\Core\\Di\\Singleton", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Core\\Di\\Singleton", "fromLink": "Smce/Core/Di/Singleton.html", "link": "Smce/Core/Di/Singleton.html#method___construct", "name": "Smce\\Core\\Di\\Singleton::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\Singleton", "fromLink": "Smce/Core/Di/Singleton.html", "link": "Smce/Core/Di/Singleton.html#method_resolveWhen", "name": "Smce\\Core\\Di\\Singleton::resolveWhen", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\Singleton", "fromLink": "Smce/Core/Di/Singleton.html", "link": "Smce/Core/Di/Singleton.html#method_getSingleton", "name": "Smce\\Core\\Di\\Singleton::getSingleton", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\Singleton", "fromLink": "Smce/Core/Di/Singleton.html", "link": "Smce/Core/Di/Singleton.html#method_getKeys", "name": "Smce\\Core\\Di\\Singleton::getKeys", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\Singleton", "fromLink": "Smce/Core/Di/Singleton.html", "link": "Smce/Core/Di/Singleton.html#method_getAll", "name": "Smce\\Core\\Di\\Singleton::getAll", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\Singleton", "fromLink": "Smce/Core/Di/Singleton.html", "link": "Smce/Core/Di/Singleton.html#method_getCount", "name": "Smce\\Core\\Di\\Singleton::getCount", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Di\\Singleton", "fromLink": "Smce/Core/Di/Singleton.html", "link": "Smce/Core/Di/Singleton.html#method_make", "name": "Smce\\Core\\Di\\Singleton::make", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Core", "fromLink": "Smce/Core.html", "link": "Smce/Core/EventManager.html", "name": "Smce\\Core\\EventManager", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method___callStatic", "name": "Smce\\Core\\EventManager::__callStatic", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method___call", "name": "Smce\\Core\\EventManager::__call", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method_push", "name": "Smce\\Core\\EventManager::push", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method_pull", "name": "Smce\\Core\\EventManager::pull", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method_bind", "name": "Smce\\Core\\EventManager::bind", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method_remove", "name": "Smce\\Core\\EventManager::remove", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method_has", "name": "Smce\\Core\\EventManager::has", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method_reset", "name": "Smce\\Core\\EventManager::reset", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method_getKeys", "name": "Smce\\Core\\EventManager::getKeys", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method_getAll", "name": "Smce\\Core\\EventManager::getAll", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\EventManager", "fromLink": "Smce/Core/EventManager.html", "link": "Smce/Core/EventManager.html#method_getCount", "name": "Smce\\Core\\EventManager::getCount", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Core", "fromLink": "Smce/Core.html", "link": "Smce/Core/Loader.html", "name": "Smce\\Core\\Loader", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Core\\Loader", "fromLink": "Smce/Core/Loader.html", "link": "Smce/Core/Loader.html#method_setDir", "name": "Smce\\Core\\Loader::setDir", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Loader", "fromLink": "Smce/Core/Loader.html", "link": "Smce/Core/Loader.html#method_register", "name": "Smce\\Core\\Loader::register", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Core\\Loader", "fromLink": "Smce/Core/Loader.html", "link": "Smce/Core/Loader.html#method_autoLoad", "name": "Smce\\Core\\Loader::autoLoad", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Core", "fromLink": "Smce/Core.html", "link": "Smce/Core/SmceFramework.html", "name": "Smce\\Core\\SmceFramework", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Core\\SmceFramework", "fromLink": "Smce/Core/SmceFramework.html", "link": "Smce/Core/SmceFramework.html#method_make", "name": "Smce\\Core\\SmceFramework::make", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Driver", "fromLink": "Smce/Driver.html", "link": "Smce/Driver/Memcache.html", "name": "Smce\\Driver\\Memcache", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_getMemcache", "name": "Smce\\Driver\\Memcache::getMemcache", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_setConfig", "name": "Smce\\Driver\\Memcache::setConfig", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_getConfig", "name": "Smce\\Driver\\Memcache::getConfig", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_connect", "name": "Smce\\Driver\\Memcache::connect", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_get", "name": "Smce\\Driver\\Memcache::get", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_set", "name": "Smce\\Driver\\Memcache::set", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_add", "name": "Smce\\Driver\\Memcache::add", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_addServer", "name": "Smce\\Driver\\Memcache::addServer", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_close", "name": "Smce\\Driver\\Memcache::close", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_decrement", "name": "Smce\\Driver\\Memcache::decrement", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_delete", "name": "Smce\\Driver\\Memcache::delete", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_flush", "name": "Smce\\Driver\\Memcache::flush", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_getExtendedStats", "name": "Smce\\Driver\\Memcache::getExtendedStats", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_getServerStatus", "name": "Smce\\Driver\\Memcache::getServerStatus", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_getStats", "name": "Smce\\Driver\\Memcache::getStats", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_getVersion", "name": "Smce\\Driver\\Memcache::getVersion", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_increment", "name": "Smce\\Driver\\Memcache::increment", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_pconnect", "name": "Smce\\Driver\\Memcache::pconnect", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_replace", "name": "Smce\\Driver\\Memcache::replace", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Driver\\Memcache", "fromLink": "Smce/Driver/Memcache.html", "link": "Smce/Driver/Memcache.html#method_setCompressThreshold", "name": "Smce\\Driver\\Memcache::setCompressThreshold", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Http", "fromLink": "Smce/Http.html", "link": "Smce/Http/HttpException.html", "name": "Smce\\Http\\HttpException", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Http\\HttpException", "fromLink": "Smce/Http/HttpException.html", "link": "Smce/Http/HttpException.html#method___construct", "name": "Smce\\Http\\HttpException::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Http\\HttpException", "fromLink": "Smce/Http/HttpException.html", "link": "Smce/Http/HttpException.html#method_getMsg", "name": "Smce\\Http\\HttpException::getMsg", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Http\\HttpException", "fromLink": "Smce/Http/HttpException.html", "link": "Smce/Http/HttpException.html#method_getHttpCode", "name": "Smce\\Http\\HttpException::getHttpCode", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Http\\HttpException", "fromLink": "Smce/Http/HttpException.html", "link": "Smce/Http/HttpException.html#method_htppError", "name": "Smce\\Http\\HttpException::htppError", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Http", "fromLink": "Smce/Http.html", "link": "Smce/Http/Response.html", "name": "Smce\\Http\\Response", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Http\\Response", "fromLink": "Smce/Http/Response.html", "link": "Smce/Http/Response.html#method___construct", "name": "Smce\\Http\\Response::__construct", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Mvc", "fromLink": "Smce/Mvc.html", "link": "Smce/Mvc/Acl.html", "name": "Smce\\Mvc\\Acl", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Mvc\\Acl", "fromLink": "Smce/Mvc/Acl.html", "link": "Smce/Mvc/Acl.html#method_setRule", "name": "Smce\\Mvc\\Acl::setRule", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Acl", "fromLink": "Smce/Mvc/Acl.html", "link": "Smce/Mvc/Acl.html#method_getRules", "name": "Smce\\Mvc\\Acl::getRules", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Acl", "fromLink": "Smce/Mvc/Acl.html", "link": "Smce/Mvc/Acl.html#method_run", "name": "Smce\\Mvc\\Acl::run", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Mvc", "fromLink": "Smce/Mvc.html", "link": "Smce/Mvc/Router.html", "name": "Smce\\Mvc\\Router", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method___construct", "name": "Smce\\Mvc\\Router::__construct", "doc": "&quot;\\Smce\\Mvc\\Router constructor&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getRewriteUri", "name": "Smce\\Mvc\\Router::getRewriteUri", "doc": "&quot;Get rewrite info. This info is read from $_GET[&#039;route&#039;]. This returns &#039;\/&#039; if the rewrite information cannot be read&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_setUriSource", "name": "Smce\\Mvc\\Router::setUriSource", "doc": "&quot;Sets the URI source. One of the URI&lt;em&gt;SOURCE&lt;\/em&gt;* constants&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_removeExtraSlashes", "name": "Smce\\Mvc\\Router::removeExtraSlashes", "doc": "&quot;Set whether router must remove the extra slashes in the handled routes&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_setDefaultNamespace", "name": "Smce\\Mvc\\Router::setDefaultNamespace", "doc": "&quot;Sets the name of the default namespace&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_setDefaultModule", "name": "Smce\\Mvc\\Router::setDefaultModule", "doc": "&quot;Sets the name of the default module&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_setDefaultController", "name": "Smce\\Mvc\\Router::setDefaultController", "doc": "&quot;Sets the default controller name&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_setDefaultAction", "name": "Smce\\Mvc\\Router::setDefaultAction", "doc": "&quot;Sets the default action name&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_setDefaults", "name": "Smce\\Mvc\\Router::setDefaults", "doc": "&quot;Sets an array of default paths. If a route is missing a path the router will use the defined here\nThis method must not be used to set a 404 route&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_handle", "name": "Smce\\Mvc\\Router::handle", "doc": "&quot;Handles routing information received from the rewrite engine&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_add", "name": "Smce\\Mvc\\Router::add", "doc": "&quot;Adds a route to the router without any HTTP constraint&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_addGet", "name": "Smce\\Mvc\\Router::addGet", "doc": "&quot;Adds a route to the router that only match if the HTTP method is GET&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_addPost", "name": "Smce\\Mvc\\Router::addPost", "doc": "&quot;Adds a route to the router that only match if the HTTP method is POST&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_addPut", "name": "Smce\\Mvc\\Router::addPut", "doc": "&quot;Adds a route to the router that only match if the HTTP method is PUT&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_addPatch", "name": "Smce\\Mvc\\Router::addPatch", "doc": "&quot;Adds a route to the router that only match if the HTTP method is PATCH&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_addDelete", "name": "Smce\\Mvc\\Router::addDelete", "doc": "&quot;Adds a route to the router that only match if the HTTP method is DELETE&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_addOptions", "name": "Smce\\Mvc\\Router::addOptions", "doc": "&quot;Add a route to the router that only match if the HTTP method is OPTIONS&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_addHead", "name": "Smce\\Mvc\\Router::addHead", "doc": "&quot;Adds a route to the router that only match if the HTTP method is HEAD&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_mount", "name": "Smce\\Mvc\\Router::mount", "doc": "&quot;Mounts a group of routes in the router&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_notFound", "name": "Smce\\Mvc\\Router::notFound", "doc": "&quot;Set a group of paths to be returned when none of the defined routes are matched&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_clear", "name": "Smce\\Mvc\\Router::clear", "doc": "&quot;Removes all the pre-defined routes&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getNamespaceName", "name": "Smce\\Mvc\\Router::getNamespaceName", "doc": "&quot;Returns the processed namespace name&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getModuleName", "name": "Smce\\Mvc\\Router::getModuleName", "doc": "&quot;Returns the processed module name&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getControllerName", "name": "Smce\\Mvc\\Router::getControllerName", "doc": "&quot;Returns the processed controller name&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getActionName", "name": "Smce\\Mvc\\Router::getActionName", "doc": "&quot;Returns the processed action name&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getParams", "name": "Smce\\Mvc\\Router::getParams", "doc": "&quot;Returns the processed parameters&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getMatchedRoute", "name": "Smce\\Mvc\\Router::getMatchedRoute", "doc": "&quot;Returns the route that matchs the handled URI&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getMatches", "name": "Smce\\Mvc\\Router::getMatches", "doc": "&quot;Returns the sub expressions in the regular expression matched&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_wasMatched", "name": "Smce\\Mvc\\Router::wasMatched", "doc": "&quot;Checks if the router macthes any of the defined routes&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getRoutes", "name": "Smce\\Mvc\\Router::getRoutes", "doc": "&quot;Returns all the routes defined in the router&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getRouteById", "name": "Smce\\Mvc\\Router::getRouteById", "doc": "&quot;Returns a route object by its id&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_getRouteByName", "name": "Smce\\Mvc\\Router::getRouteByName", "doc": "&quot;Returns a route object by its name&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router.html#method_isExactControllerName", "name": "Smce\\Mvc\\Router::isExactControllerName", "doc": "&quot;Returns whether controller name should not be mangled&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router/Exception.html", "name": "Smce\\Mvc\\Router\\Exception", "doc": "&quot;\n&quot;"},
                    
            {"type": "Class", "fromName": "Smce\\Mvc\\Router", "fromLink": "Smce/Mvc/Router.html", "link": "Smce/Mvc/Router/Route.html", "name": "Smce\\Mvc\\Router\\Route", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method___construct", "name": "Smce\\Mvc\\Router\\Route::__construct", "doc": "&quot;\\Smce\\Mvc\\Router\\Route constructor&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_compilePattern", "name": "Smce\\Mvc\\Router\\Route::compilePattern", "doc": "&quot;Replaces placeholders from pattern returning a valid PCRE regular expression&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_via", "name": "Smce\\Mvc\\Router\\Route::via", "doc": "&quot;Set one or more HTTP methods that constraint the matching of the route&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_extractNamedParams", "name": "Smce\\Mvc\\Router\\Route::extractNamedParams", "doc": "&quot;Extracts parameters from a string&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_reConfigure", "name": "Smce\\Mvc\\Router\\Route::reConfigure", "doc": "&quot;Reconfigure the route adding a new pattern and a set of paths&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getName", "name": "Smce\\Mvc\\Router\\Route::getName", "doc": "&quot;Returns the route&#039;s name&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_setName", "name": "Smce\\Mvc\\Router\\Route::setName", "doc": "&quot;Sets the route&#039;s name&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_beforeMatch", "name": "Smce\\Mvc\\Router\\Route::beforeMatch", "doc": "&quot;Sets a callback that is called if the route is matched.&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getBeforeMatch", "name": "Smce\\Mvc\\Router\\Route::getBeforeMatch", "doc": "&quot;Returns the &#039;before match&#039; callback if any&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getRouteId", "name": "Smce\\Mvc\\Router\\Route::getRouteId", "doc": "&quot;Returns the route&#039;s id&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getPattern", "name": "Smce\\Mvc\\Router\\Route::getPattern", "doc": "&quot;Returns the route&#039;s pattern&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getCompiledPattern", "name": "Smce\\Mvc\\Router\\Route::getCompiledPattern", "doc": "&quot;Returns the route&#039;s compiled pattern&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getPaths", "name": "Smce\\Mvc\\Router\\Route::getPaths", "doc": "&quot;Returns the paths&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getReversedPaths", "name": "Smce\\Mvc\\Router\\Route::getReversedPaths", "doc": "&quot;Returns the paths using positions as keys and names as values&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_setHttpMethods", "name": "Smce\\Mvc\\Router\\Route::setHttpMethods", "doc": "&quot;Sets a set of HTTP methods that constraint the matching of the route (alias of via)&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getHttpMethods", "name": "Smce\\Mvc\\Router\\Route::getHttpMethods", "doc": "&quot;Returns the HTTP methods that constraint matching the route&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_setHostname", "name": "Smce\\Mvc\\Router\\Route::setHostname", "doc": "&quot;Sets a hostname restriction to the route&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getHostname", "name": "Smce\\Mvc\\Router\\Route::getHostname", "doc": "&quot;Returns the hostname restriction if any&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_setGroup", "name": "Smce\\Mvc\\Router\\Route::setGroup", "doc": "&quot;Sets the group associated with the route&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getGroup", "name": "Smce\\Mvc\\Router\\Route::getGroup", "doc": "&quot;Returns the group associated with the route&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_convert", "name": "Smce\\Mvc\\Router\\Route::convert", "doc": "&quot;Adds a converter to perform an additional transformation for certain parameter&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_getConverters", "name": "Smce\\Mvc\\Router\\Route::getConverters", "doc": "&quot;Returns the router converter&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Router\\Route", "fromLink": "Smce/Mvc/Router/Route.html", "link": "Smce/Mvc/Router/Route.html#method_reset", "name": "Smce\\Mvc\\Router\\Route::reset", "doc": "&quot;Resets the internal route id generator&quot;"},
            
            {"type": "Class", "fromName": "Smce\\Mvc", "fromLink": "Smce/Mvc.html", "link": "Smce/Mvc/Url.html", "name": "Smce\\Mvc\\Url", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Mvc\\Url", "fromLink": "Smce/Mvc/Url.html", "link": "Smce/Mvc/Url.html#method_setBaseUrl", "name": "Smce\\Mvc\\Url::setBaseUrl", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Url", "fromLink": "Smce/Mvc/Url.html", "link": "Smce/Mvc/Url.html#method_getBaseUrl", "name": "Smce\\Mvc\\Url::getBaseUrl", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "Smce\\Mvc\\Url", "fromLink": "Smce/Mvc/Url.html", "link": "Smce/Mvc/Url.html#method_get", "name": "Smce\\Mvc\\Url::get", "doc": "&quot;params&quot;"},
            
            {"type": "Class", "fromName": "Smce", "fromLink": "Smce.html", "link": "Smce/Sm.html", "name": "Smce\\Sm", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "Smce\\Sm", "fromLink": "Smce/Sm.html", "link": "Smce/Sm.html#method_app", "name": "Smce\\Sm::app", "doc": "&quot;\n&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


