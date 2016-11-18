var addressBook = ['github.com/dropwizard/dropwizard', 'github.com/perwendel/spark', 'github.com/square/otto', 'github.com/google/j2objc', 'github.com/junit-team/junit4', 'github.com/eclipse/vert.x', 'github.com/prestodb/presto', 'github.com/alibaba/druid', 'github.com/google/iosched', 'github.com/jfeinstein10/SlidingMenu', 'github.com/spring-projects/spring-mvc-showcase', 'github.com/Graylog2/graylog2-server', 'github.com/johncarl81/parceler', 'github.com/twitter/heron', 'github.com/JodaOrg/joda-time', 'github.com/Alluxio/alluxio', 'github.com/Vedenin/useful-java-links', 'github.com/alibaba/RocketMQ', 'github.com/square/javapoet', 'github.com/bytedeco/javacpp', 'github.com/NLPchina/elasticsearch-sql', 'github.com/Bukkit/Bukkit', 'github.com/ben-manes/caffeine', 'github.com/tobie/ua-parser', 'github.com/JoanZapata/android-pdfview', 'github.com/wildfly/wildfly', 'github.com/iluwatar/java-design-patterns', 'github.com/biezhi/blade', 'github.com/ACRA/acra', 'github.com/eclipse/che', 'github.com/google/auto', 'github.com/scribejava/scribejava', 'github.com/xetorthio/jedis', 'github.com/brettwooldridge/HikariCP', 'github.com/mybatis/mybatis-3', 'github.com/jhy/jsoup', 'github.com/apache/storm', 'github.com/stanfordnlp/CoreNLP', 'github.com/yui/yuicompressor', 'github.com/yinwang0/pysonar2', 'github.com/psaravan/JamsMusicPlayer', 'github.com/NLPchina/ansj_seg', 'github.com/naver/pinpoint', 'github.com/OpenTSDB/opentsdb', 'github.com/jankotek/mapdb', 'github.com/joelittlejohn/jsonschema2pojo', 'github.com/square/moshi', 'github.com/square/okhttp', 'github.com/spring-projects/spring-security-oauth', 'github.com/maurycyw/StaggeredGridView', 'github.com/chanjarster/weixin-java-tools', 'github.com/antlr/antlr4', 'github.com/shekhargulati/99-problems', 'github.com/gephi/gephi', 'github.com/goldmansachs/gs-collections', 'github.com/bonnyfone/vectalign', 'github.com/netty/netty', 'github.com/JakeWharton/ActionBarSherlock', 'github.com/spring-projects/spring-boot', 'github.com/alibaba/dubbo', 'github.com/alibaba/fastjson', 'github.com/clojure/clojure', 'github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition', 'github.com/orfjackal/retrolambda', 'github.com/orientechnologies/orientdb', 'github.com/Atmosphere/atmosphere', 'github.com/square/okio', 'github.com/lecho/hellocharts-android', 'github.com/JakeWharton/DiskLruCache', 'github.com/AsyncHttpClient/async-http-client', 'github.com/code4craft/webmagic', 'github.com/square/retrofit', 'github.com/google/guava', 'github.com/libgdx/libgdx', 'github.com/owncloud/android', 'github.com/google/binnavi', 'github.com/apache/zeppelin', 'github.com/weibocom/motan', 'github.com/kevinsawicki/http-request', 'github.com/twitter/distributedlog', 'github.com/grpc/grpc-java', 'github.com/hazelcast/hazelcast'];
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    for (i = 0; i < addressBook.length; i++) {
      chrome.declarativeContent.onPageChanged.addRules([
        {
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: addressBook[i] },
            })
          ],
          actions: [ new chrome.declarativeContent.ShowPageAction() ]
        }
      ]);
    }
  });
});
